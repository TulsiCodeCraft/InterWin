import { config } from 'dotenv';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { StringOutputParser } from '@langchain/core/output_parsers';

// Load environment variables
config();

// Function to generate prompt template
function generateTemplate() {
  const template = `You are an expert in creating technical interview questions. The user will choose a domain such as Frontend Development, Backend Development, Database Management, Full Stack Development, etc. Based on the selected domain, you will generate a set of relevant interview questions for the user to assess their knowledge and skills. These questions should vary in difficulty (easy, medium, hard) and cover a range of topics within the chosen domain. Each question should be clear, concise, and aimed at evaluating the candidate's understanding of the core concepts and practical experience in the selected domain.

  For example, if the user chooses "Frontend Development" as the domain, you might ask questions about HTML, CSS, JavaScript, and frameworks like React or Angular. If the user chooses "Database Management," the questions could be about SQL queries, database design, normalization, and indexing.

  Your goal is to provide a set of {qset} questions that are diverse, challenging, and aligned with industry standards for technical interviews.

  Create questions for the position of {job}.

  In the response, provide only the questions you have generated and don't give an index to the question.
  `;
  return PromptTemplate.fromTemplate(template);
}

// Function to generate interview questions
export async function generateInterviewQuestions(qset, job) {
  // Get the prompt template
  const promptTemplate = generateTemplate();

  // Initialize the LLM model
  const llm = new ChatGoogleGenerativeAI({
    modelName: 'gemini-pro',
    temperature: 0.3,
  });

  // Create a RunnableSequence
  const chain = RunnableSequence.from([
    promptTemplate,
    llm,
    new StringOutputParser(),
  ]);

  // Generate questions using the chain
  const result = await chain.invoke({ qset, job });

  // Split the questions into a list and return
  return result.split('\n').filter(q => q.trim()).map(q => q.trim());
}