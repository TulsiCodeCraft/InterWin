const cardsData = [
  {
    name: 'Lisa_Roy',
    category: 'Java Developer Interview Preparatory',
    desc: '5 years of experience in software development. Completed a Bachelor\'s in Computer Science from MIT, specializing in Java development and Spring Framework.',
    img: 'https://www.tatvasoft.com/outsourcing/wp-content/uploads/2021/06/Java-Developer-Skills-1280x720.jpg',
    yearsOfExperience: 5,
    calendlyUrl: 'https://calendly.com/lisa_roy',
  },
  {
    name: 'Jennie Mukherji',
    category: 'Advanced Soft Skills Training',
    desc: '10+ years of experience in corporate training. MBA from IIM Bangalore, with expertise in communication, leadership, and public speaking.',
    img: 'https://i.ytimg.com/vi/ll7JyRxWMQY/maxresdefault.jpg',
    yearsOfExperience: 10,
    calendlyUrl: 'https://calendly.com/jennie_mukherji',
  },
  {
    name: 'Diva Kapoor',
    category: 'Full Stack Developer Bootcamp',
    desc: 'Experienced in web and mobile application development. Holds a degree in IT from VJTI and certification in Full Stack development from Coursera.',
    img: 'https://media.licdn.com/dms/image/D4D12AQEqHDV0Q9hUjQ/article-cover_image-shrink_720_1280/0/1713443439009?e=2147483647&v=beta&t=ka6rLhsQmdkHvHli0UQ0v28isniiroiQ5Vkkh0E7kdk',
    yearsOfExperience: 5,
    calendlyUrl: 'https://calendly.com/diva_kapoor',
  },
  {
    name: 'Pranav Kapoor',
    category: 'Data Science with Python',
    desc: 'Data Analyst with 7 years of experience in the field. Completed a Master\'s in Data Science from NYU, specializing in Python, machine learning, and data visualization.',
    img: 'https://i.ytimg.com/vi/jGm0x_JbkD8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDa3-Fib7r5VuEQPlHPbFS7KFQp5w',
    yearsOfExperience: 7,
    calendlyUrl: 'https://calendly.com/pranav_kapoor',
  },
  {
    name: 'Aayush Shah',
    category: 'Cloud Computing Essentials',
    desc: 'AWS Certified Solutions Architect with 4 years of experience. Holds a Bachelor\'s in Information Technology from DTU.',
    img: 'https://i.ytimg.com/vi/lae0mfHBSjk/maxresdefault.jpg',
    yearsOfExperience: 4,
    calendlyUrl: 'https://calendly.com/aayush_shah',
  },
  {
    name: 'Sonia Mehta',
    category: 'Agile Project Management',
    desc: 'Certified Agile Scrum Master with 6 years of experience in IT project management. MBA in IT Management from SP Jain School of Global Management.',
    img: 'https://www.conted.ox.ac.uk/mnt/images/agile-course-screen-shot.png',
    yearsOfExperience: 6,
    calendlyUrl: 'https://calendly.com/sonia_mehta',
  },
  {
    name: 'Akash Bhatia',
    category: 'Cybersecurity Fundamentals',
    desc: 'Certified Ethical Hacker (CEH) with 5 years of experience in network security. Graduated from IIT Bombay with a focus on cybersecurity and ethical hacking.',
    img: 'https://thecyberexpress.com/wp-content/uploads/2023/10/MicrosoftTeams-image-75.png',
    yearsOfExperience: 5,
    calendlyUrl: 'https://calendly.com/akash_bhatia',
  },
  {
    name: 'Ritika Verma',
    category: 'Python Programming Masterclass',
    desc: 'Python developer with 3 years of experience. Holds a Bachelor\'s in Computer Applications and has developed applications for various startups.',
    img: 'https://i.ytimg.com/vi/KXTANzN1hfE/maxresdefault.jpg',
    yearsOfExperience: 3,
    calendlyUrl: 'https://calendly.com/ritika_verma',
  },
  {
    name: 'Karan Gupta',
    category: 'Blockchain Development',
    desc: 'Blockchain engineer with 2 years of experience. Graduated with a degree in Computer Science from Stanford and worked on Ethereum and Hyperledger projects.',
    img: 'https://www.cromacampus.com/public/uploads/Blog/2024/05/week_3/Blockchain-Course-Syllabus-&-Modules.jpg',
    yearsOfExperience: 2,
    calendlyUrl: 'https://calendly.com/karan_gupta',
  },
  {
    name: 'Anjali Sen',
    category: 'Machine Learning for Beginners',
    desc: 'AI researcher with 3 years of experience in deep learning. Holds a Master\'s in AI from IIT Kanpur and specializes in neural networks and computer vision.',
    img: 'https://cdn8.openculture.com/2022/06/21191516/Stanford-Deeplearning.ai-email-social-2.png',
    yearsOfExperience: 3,
    calendlyUrl: 'https://calendly.com/anjali_sen',
  },
  {
    name: 'Vikram Malhotra',
    category: 'Big Data Analytics',
    desc: 'Big Data expert with 8 years of experience in Hadoop and Spark. Master\'s in Data Engineering from UC Berkeley, focusing on large-scale data processing.',
    img: 'https://courses.iid.org.in/public//uploads/media_manager/719.png',
    yearsOfExperience: 8,
    calendlyUrl: 'https://calendly.com/vikram_malhotra',
  },
  {
    name: 'Priya Nair',
    category: 'UI/UX Design Basics',
    desc: 'UI/UX designer with 4 years of experience. Holds a Bachelor\'s in Design from NID and has worked on mobile and web application designs.',
    img: 'https://i.ytimg.com/vi/BU_afT-aIn0/maxresdefault.jpg',
    yearsOfExperience: 4,
    calendlyUrl: 'https://calendly.com/priya_nair',
  },
];
export default cardsData;

export const InterviewCompanies = [
  {
    id: 1,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    industry: "Technology",
    size: "100,000+ employees",
    position: "Backend Developer",
    locations: ["Kolkata", "Mumbai", "New Delhi", "Hyderabad"],
    experience: "1 - 4 years",
    salary: "Not Disclosed",
    skills: ["No-Code", "Web Development", "Software Engineering"],
  },
  {
    id: 2,
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
    industry: "Social Media",
    size: "70,000+ employees",
    position: "Frontend Developer",
    locations: ["Menlo Park", "London", "Singapore"],
    experience: "2 - 5 years",
    salary: "Not Disclosed",
    skills: ["React", "JavaScript", "UI/UX Design"],
  },
  {
    id: 3,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    industry: "E-commerce",
    size: "1,000,000+ employees",
    position: "Data Scientist",
    locations: ["Seattle", "Austin", "Vancouver"],
    experience: "3 - 6 years",
    salary: "Not Disclosed",
    skills: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    id: 4,
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    industry: "Entertainment",
    size: "12,000+ employees",
    position: "UI/UX Designer",
    locations: ["Los Gatos", "London", "Tokyo"],
    experience: "2 - 4 years",
    salary: "Not Disclosed",
    skills: ["Figma", "User Research", "Prototyping"],
  },
  {
    id: 5,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png",
    industry: "Technology",
    size: "181,000+ employees",
    position: "Software Engineer",
    locations: ["Redmond", "San Francisco", "Hyderabad"],
    experience: "1 - 3 years",
    salary: "Not Disclosed",
    skills: ["C#", "Azure", "Cloud Computing"],
  },
  {
    id: 6,
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/800px-Tesla_logo.png",
    industry: "Automotive",
    size: "127,855 employees",
    position: "Product Manager",
    locations: ["Palo Alto", "Austin", "Berlin"],
    experience: "3 - 5 years",
    salary: "Not Disclosed",
    skills: ["Agile", "Product Development", "Market Research"],
  },
  {
    id: 7,
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png",
    industry: "Technology",
    size: "147,000+ employees",
    position: "Graphic Designer",
    locations: ["Cupertino", "London", "Tokyo"],
    experience: "1 - 3 years",
    salary: "Not Disclosed",
    skills: ["Adobe Suite", "Branding", "Visual Design"],
  },
  {
    id: 8,
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Spotify_logo_with_text.svg/2560px-Spotify_logo_with_text.svg.png",
    industry: "Music Streaming",
    size: "6,500+ employees",
    position: "Content Writer",
    locations: ["Stockholm", "New York", "London"],
    experience: "2 - 4 years",
    salary: "Not Disclosed",
    skills: ["SEO", "Copywriting", "Content Strategy"],
  },
  {
    id: 9,
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    industry: "Technology",
    size: "350,000+ employees",
    position: "DevOps Engineer",
    locations: ["Armonk", "Dallas", "Bangalore"],
    experience: "2 - 5 years",
    salary: "Not Disclosed",
    skills: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: 10,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Nike_Logo.svg/2560px-Nike_Logo.svg.png",
    industry: "Retail",
    size: "75,400 employees",
    position: "Marketing Manager",
    locations: ["Beaverton", "New York", "Shanghai"],
    experience: "3 - 6 years",
    salary: "Not Disclosed",
    skills: ["Digital Marketing", "Brand Management", "Market Analysis"],
  },
];


export const mockInterviewData = [
  {
    id: 1,
    position: "Frontend Developer",
    image: "https://img.freepik.com/free-vector/app-development-concept-design_23-2148670525.jpg",
    questions: {
      easy: [
        "What is React?",
        "Explain hooks in React.",
        "What is Redux?"
      ],
      medium: [
        "Explain Redux in React.",
        "What is the virtual DOM and how does it work?",
        "What are the differences between React and Angular?",
        "What are the lifecycle methods in React?"
      ],
      professional: [
        "Explain the concept of JSX in React.",
        "What are React fragments?",
        "How does React handle events?",
        "What is the role of Webpack in a React application?",
        "What is lazy loading in React?"
      ]
    },
  },
  {
    id: 2,
    position: "Backend Developer",
    image: "https://img.freepik.com/free-photo/joint-work-talented-programmers_1098-17280.jpg",
    questions: {
      easy: [
        "What is Node.js?",
        "Explain RESTful APIs.",
        "What are the advantages of using Express.js?"
      ],
      medium: [
        "Explain how middleware works in Express.",
        "What is the difference between SQL and NoSQL databases?",
        "Explain the use of JWT for authentication."
      ],
      professional: [
        "How do you manage sessions in Node.js?",
        "What is clustering in Node.js?",
        "Explain event-driven architecture in Node.js.",
        "What is CORS and how do you handle it in backend development?"
      ]
    },
  },
  {
    id: 3,
    position: "Fullstack Developer",
    image: "https://img.freepik.com/free-photo/side-view-attractive-hispanic-software-developer-programming-using-computer-while-working-from-home_662251-958.jpg",
    questions: {
      easy: [
        "How do you handle state management in React and Node?",
        "Explain the architecture of a full-stack MERN application."
      ],
      medium: [
        "What are the main challenges when working on both frontend and backend?",
        "How do you manage user authentication in a full-stack application?",
        "Explain the role of APIs in full-stack development."
      ],
      professional: [
        "What are some common security practices in full-stack development?",
        "How do you handle database connections in a full-stack app?",
        "What is server-side rendering and how does it differ from client-side rendering?",
        "How do you optimize a full-stack application for scalability?"
      ]
    },
  },
  {
    id: 4,
    position: "Data Scientist",
    image: "https://img.freepik.com/free-photo/back-shot-overwhelmed-woman-working-night-front-computer-writing-notes-notebook-annual-reports-checking-financial-deadline_482257-5154.jpg",
    questions: {
      easy: [
        "What is machine learning?",
        "Explain how it works in real life.",
        "What are the different types of machine learning algorithms?"
      ],
      medium: [
        "What is the difference between supervised and unsupervised learning?",
        "Explain the concept of overfitting in machine learning.",
        "What is cross-validation and why is it important?"
      ],
      professional: [
        "How do you handle missing data in a dataset?",
        "What is feature engineering in data science?",
        "Explain the difference between precision and recall.",
        "How would you deploy a machine learning model?"
      ]
    },
  },
  {
    id: 5,
    position: "UI UX Designer",
    image: "https://img.freepik.com/free-vector/interaction-design-concept-illustration_114360-4520.jpg",
    questions: {
      easy: [
        "What is UI/UX?",
        "Explain how it works in real life.",
        "What are the key differences between UI and UX design?"
      ],
      medium: [
        "Explain the importance of user research in UX design.",
        "What is wireframing and why is it important?",
        "How do you approach creating personas in UX design?"
      ],
      professional: [
        "Explain the concept of a user journey map.",
        "How do you conduct usability testing?",
        "What is responsive design and why is it important?",
        "How do you incorporate accessibility into your designs?"
      ]
    },
  },
  {
    id: 6,
    position: "Graphic Designer",
    image: "https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg",
    questions: {
      easy: [
        "What is graphic design?",
        "Explain how it works in real life.",
        "What are the basic principles of graphic design?"
      ],
      medium: [
        "How do you approach designing for different mediums (print vs. digital)?",
        "What is the role of typography in graphic design?",
        "Explain the importance of color theory in design."
      ],
      professional: [
        "How do you ensure that your design communicates the intended message?",
        "What are some popular tools used in graphic design?",
        "Explain the difference between raster and vector graphics.",
        "How do you handle feedback on your designs?"
      ]
    },
  },
  {
    id: 7,
    position: "Content Writer",
    image: "https://img.freepik.com/free-vector/content-author-writer-job-concept_74855-7064.jpg",
    questions: {
      easy: [
        "What is content writing?",
        "Explain how it works in real life.",
        "How do you approach writing for different audiences?"
      ],
      medium: [
        "What are the key components of SEO writing?",
        "How do you ensure content is engaging?",
        "What tools do you use for content research?"
      ],
      professional: [
        "Explain the importance of headlines and subheadings in content.",
        "How do you measure the success of your content?",
        "What role does editing play in content creation?",
        "How do you handle writer's block?"
      ]
    },
  },
  {
    id: 8,
    position: "Product Manager",
    image: "https://img.freepik.com/free-photo/portrait-asian-woman-business-owner-using-digital-tablet-checking-amount-stock-product-inventory-shelf-distribution-warehouse-factorylogistic-business-shipping-delivery-service_609648-2022.jpg",
    questions: {
      easy: [
        "What is product management?",
        "Explain how it works in real life.",
        "How do you prioritize features in a product roadmap?"
      ],
      medium: [
        "What is the role of market research in product development?",
        "How do you handle stakeholder expectations?",
        "What are the key metrics you track for product success?"
      ],
      professional: [
        "Explain the concept of product-market fit.",
        "How do you manage a cross-functional team?",
        "What is a minimum viable product (MVP)?",
        "How do you handle a product failure?"
      ]
    },
  },
  {
    id: 9,
    position: "Software Engineer",
    image: "https://img.freepik.com/free-vector/professional-programmer-engineer-writing-code_3446-693.jpg",
    questions: {
      easy: [
        "What is software engineering?",
        "Explain how it works in real life.",
        "What are the key principles of object-oriented programming?"
      ],
      medium: [
        "How do you approach debugging in software development?",
        "What are some common design patterns in software engineering?",
        "How do you ensure code quality in a large project?"
      ],
      professional: [
        "What is version control and why is it important?",
        "Explain the concept of continuous integration and continuous deployment.",
        "What is unit testing and why is it important?",
        "How do you manage technical debt in a project?"
      ]
    },
  },
  {
    id: 10,
    position: "Data Analyst",
    image: "https://img.freepik.com/free-photo/consulting-with-colleague_1098-15099.jpg",
    questions: {
      easy: [
        "What is data analysis?",
        "Explain how it works in real life.",
        "What are the different types of data analysis?"
      ],
      medium: [
        "How do you handle missing or incomplete data?",
        "Explain the difference between correlation and causation.",
        "What are some common data visualization tools?"
      ],
      professional: [
        "How do you ensure data accuracy?",
        "What is the importance of statistical analysis in data analysis?",
        "Explain the concept of data cleaning.",
        "How do you communicate data insights to non-technical stakeholders?"
      ]
    },
  },
];



export const practiceData = [
  {
    id: 1,
    position: "Frontend Developer",
    tasks: {
      HTML: [
        { task: "Build a responsive navigation bar.",resources:  "https://www.geeksforgeeks.org/create-a-responsive-navbar-with-icons-using-html-css-and-javascript/", completed: false },
        { task: "Implement a form with validation.",resources:  "https://www.geeksforgeeks.org/create-a-responsive-navbar-with-icons-using-html-css-and-javascript/", completed: false },
      ],
      CSS: [
        { task: "Optimize a web page for performance.",resources:"https://www.geeksforgeeks.org/7-tips-for-performances-optimization-in-web-development/", completed: false },
        { task: "Use CSS Grid and Flexbox to build a layout.",resources:"https://www.geeksforgeeks.org/how-to-create-a-flexbox-grid/" ,completed: false },
      ],
    },
  },
  {
    id: 2,
    position: "Backend Developer",
    tasks: {
      APIs: [
        { task: "Create a RESTful API with Node.js.",resources:"https://www.geeksforgeeks.org/how-to-build-a-restful-api-using-node-express-and-mongodb/" , completed: false },
        { task: "Implement JWT authentication.",resources:"https://www.geeksforgeeks.org/json-web-token-jwt/" , completed: false },
      ],
      Database: [
        { task: "Set up a MongoDB database.",resources:"https://www.geeksforgeeks.org/mongodb-tutorial/" , completed: false },
        { task: "Use PostgreSQL for data persistence.",resources:"https://www.geeksforgeeks.org/postgresql-tutorial/" , completed: false },
      ],
    },
  },
  {
    id: 3,
    position: "Fullstack Developer",
    tasks: {
      MERN: [
        { task: "Build a full-stack MERN application.",resources:"https://www.geeksforgeeks.org/mern-stack/" , completed: false },
        { task: "Set up React on the frontend and Express on the backend.",resources:"https://www.geeksforgeeks.org/how-to-connect-node-js-with-react-js/" , completed: false },
      ],
      Deployment: [
        { task: "Deploy the app using Heroku or Netlify.",resources:"https://www.geeksforgeeks.org/how-to-deploy-website-on-netlify/" , completed: false },
        { task: "Integrate user authentication and authorization.",resources:"https://www.geeksforgeeks.org/authentication-and-authorization-with-oauth/" , completed: false },
      ],
    },
  },
  {
    id: 4,
    position: "Data Scientist",
    tasks: {
      EDA: [
        { task: "Perform exploratory data analysis (EDA) on a dataset.",resources:"https://www.geeksforgeeks.org/what-is-exploratory-data-analysis/" , completed: false },
        { task: "Build a machine learning model with Python.",resources:"https://www.geeksforgeeks.org/machine-learning-with-python/" , completed: false },
      ],
      Evaluation: [
        { task: "Evaluate model performance using metrics.",resources:"https://www.geeksforgeeks.org/metrics-for-machine-learning-model/" , completed: false },
        { task: "Use visualization tools like Matplotlib and Seaborn.",resources:"https://www.geeksforgeeks.org/data-visualisation-in-python-using-matplotlib-and-seaborn/" , completed: false },
      ],
    },
  },
  {
    id: 5,
    position: "UI UX Designer",
    tasks: {
      Prototyping: [
        { task: "Create wireframes and prototypes for a mobile app.",resources:"" , completed: false },
        { task: "Design a user-friendly website using Figma.",resources:"" , completed: false },
      ],
      Research: [
        { task: "Conduct user research and create personas.",resources:"" , completed: false },
        { task: "Perform usability testing on your prototype.",resources:"" , completed: false },
      ],
    },
  },
  {
    id: 6,
    position: "Graphic Designer",
    tasks: {
      Design: [
        { task: "Design a logo using Adobe Illustrator.",resources:"" , completed: false },
        { task: "Create social media graphics for a brand.",resources:"" , completed: false },
      ],
      Branding: [
        { task: "Design a print-ready business card.",resources:"" , completed: false },
        { task: "Develop a brand color palette and typography.",resources:"" , completed: false },
      ],
    },
  },
  {
    id: 7,
    position: "Content Writer",
    tasks: {
      SEO: [
        { task: "Write an SEO-optimized blog post.",resources:"" , completed: false },
        { task: "Create a content calendar for a website.",resources:"" , completed: false },
      ],
      Editing: [
        { task: "Write engaging social media posts.",resources:"" , completed: false },
        { task: "Edit content for grammar and readability.",resources:"" , completed: false },
      ],
    },
  },
  {
    id: 8,
    position: "Product Manager",
    tasks: {
      Roadmapping: [
        { task: "Create a product roadmap for a new feature.",resources:"" , completed: false },
        { task: "Define key performance indicators (KPIs) for a product.",resources:"" , completed: false },
      ],
      Research: [
        { task: "Conduct market research and analyze competitors.",resources:"" , completed: false },
        { task: "Work with a cross-functional team to plan a sprint.",resources:"" , completed: false },
      ],
    },
  },
  {
    id: 9,
    position: "Software Engineer",
    tasks: {
      SoftwareDevelopment: [
        { task: "Develop a software system with object-oriented principles.",resources:"" , completed: false },
        { task: "Implement data structures and algorithms in a project.", resources:"" ,completed: false },
      ],
      Testing: [
        { task: "Write unit and integration tests for the system.", resources:"" ,completed: false },
        { task: "Optimize the application for scalability.",resources:"" , completed: false },
      ],
    },
  },
  {
    id: 10,
    position: "Data Analyst",
    tasks: {
      Visualization: [
        { task: "Create dashboards using data visualization tools.",resources:"" , completed: false },
        { task: "Use Power BI or Tableau to present insights.",resources:"" , completed: false },
      ],
      Analysis: [
        { task: "Analyze datasets using Excel or SQL.", resources:"" ,completed: false },
        { task: "Perform statistical analysis to find trends.",resources:"" , completed: false },
      ],
    },
  },
];


export const jobListings = [

  {
    id: 1,
    title: "Backend Developer",
    companyId: "101",
    company: "TechInnovate Solutions",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyR-eY6XruEswHpvpwCyz_GFbSd8odEyCXng&s",
     rating: "2.5",
    reviews: 6,
    experience: "1 - 4 years",
    salary: "Not Disclosed",
    location: "Kolkata, Mumbai, New Delhi, Hyderabad, Pune, Chennai, Bengaluru",
    duration: "Full Time",
    postedDate: "7 days ago",
    openings: 1,
    applicants: 210,
    matchScores: ["Early Applicant", "Keyskills", "Location", "Work Experience"],
    description: [
      "As a Unqork No-Code Tool Developer, you will be responsible for designing, developing, and implementing applications using the Unqork platform.",
      "You will collaborate with cross-functional teams to understand business requirements and translate them into efficient and scalable solutions.",
      "This role offers an exciting opportunity to work with the latest technologies and contribute to the success of our clients' digital transformation journeys."
    ],
    responsibilities: [
      "Design, develop, and implement applications using the Unqork platform",
      "Collaborate with cross-functional teams to gather and analyze business requirements",
      "Translate business requirements into efficient and scalable no-code solutions",
      "Ensure the quality and performance of developed applications",
      "Participate in code reviews and provide constructive feedback",
      "Stay updated with the latest features and best practices of the Unqork platform"
    ],
    role: "Software Development - Other",
    industryType: "Software Product",
    department: "Engineering - Software & QA",
    employmentType: "Full Time, Permanent",
    roleCategory: "Software Development",
    education: {
      ug: "Any Graduate",
      pg: "Any Postgraduate"
    },
    keySkills: [
      "Web services",
      "development testing",
      "Database design",
      "Web development",
      "Javascript",
      "Agile",
      "Software development life cycle",
      "HTML",
      "Information technology"
    ],
    tags: ["No-Code", "Unqork", "Web Development", "Software Engineering"],
    socialLinks: [
      { icon: "Facebook", url: "#" },
      { icon: "Twitter", url: "#" },
      { icon: "LinkedIn", url: "#" }
    ],
    aboutCompany: "Surge Technology Solutions is a one stop BPM solution provider offering digitally driven Business Process Management solutions for businesses across various industries."
  },
  {
    id: 2,
    title: "Frontend Developer",
    companyId: "101",
    company: "TechInnovate Solutions",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyR-eY6XruEswHpvpwCyz_GFbSd8odEyCXng&s",
    rating: "4.2",
    reviews: 128,
    experience: "2 - 5 years",
    salary: "₹6,00,000 - ₹12,00,000 PA",
    location: "Bangalore, Hyderabad",
    duration: "Full Time",
    postedDate: "3 days ago",
    openings: 3,
    applicants: 75,
    matchScores: ["Keyskills", "Location", "Work Experience"],
    description: [
      "We are seeking a talented Frontend Developer to join our dynamic team.",
      "You will be responsible for implementing visual elements that users see and interact with in a web application.",
      "Collaborate with back-end developers and web designers to improve usability."
    ],
    responsibilities: [
      "Develop new user-facing features",
      "Build reusable code and libraries for future use",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize application for maximum speed and scalability",
      "Assure that all user input is validated before submitting to back-end"
    ],
    role: "Frontend Developer",
    industryType: "IT Services & Consulting",
    department: "Engineering",
    employmentType: "Full Time, Permanent",
    roleCategory: "Software Development",
    education: {
      ug: "B.Tech/B.E. in Computer Science, IT or related field",
      pg: "M.Tech/MCA (Preferred)"
    },
    keySkills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vue.js",
      "Webpack",
      "Responsive Design"
    ],
    tags: ["Frontend", "JavaScript", "React", "Web Development"],
    aboutCompany: "TechInnovate Solutions is a leading software development company specializing in creating cutting-edge web and mobile applications."
  },
  {
    id: 7,
    title: "Backend Developer",    
    companyId: "101",
    company: "TechInnovate Solutions",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyR-eY6XruEswHpvpwCyz_GFbSd8odEyCXng&s",
    rating: "4.2",
    reviews: 128,
    experience: "2 - 5 years",
    salary: "₹6,00,000 - ₹12,00,000 PA",
    location: "Bangalore, Hyderabad",
    duration: "Full Time",
    postedDate: "3 days ago",
    openings: 3,
    applicants: 75,
    matchScores: ["Keyskills", "Location", "Work Experience"],
    description: [
      "We are seeking a talented Frontend Developer to join our dynamic team.",
      "You will be responsible for implementing visual elements that users see and interact with in a web application.",
      "Collaborate with back-end developers and web designers to improve usability."
    ],
    responsibilities: [
      "Develop new user-facing features",
      "Build reusable code and libraries for future use",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize application for maximum speed and scalability",
      "Assure that all user input is validated before submitting to back-end"
    ],
    role: "Backend Developer",
    industryType: "IT Services & Consulting",
    department: "Engineering",
    employmentType: "Full Time, Permanent",
    roleCategory: "Software Development",
    education: {
      ug: "B.Tech/B.E. in Computer Science, IT or related field",
      pg: "M.Tech/MCA (Preferred)"
    },
    keySkills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Vue.js",
      "Webpack",
      "Responsive Design"
    ],
    tags: ["Frontend", "JavaScript", "React", "Web Development"],
    aboutCompany: "TechInnovate Solutions is a leading software development company specializing in creating cutting-edge web and mobile applications."
  },
  {
    id: 3,
    title: "Data Scientist",
    companyId: "102",
    company: "DataMind Analytics",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFrEHaJtr-L7g/company-logo_200_200/company-logo_200_200/0/1676687822078?e=2147483647&v=beta&t=EybQieXtE5sYqMf9QV6r-YuJP8NyV4nNkM01_xC2G20",
    rating: "4.0",
    reviews: 87,
    experience: "3 - 7 years",
    salary: "₹15,00,000 - ₹25,00,000 PA",
    location: "Mumbai, Pune",
    duration: "Full Time",
    postedDate: "5 days ago",
    openings: 2,
    applicants: 150,
    matchScores: ["Keyskills", "Work Experience"],
    description: [
      "We are looking for a Data Scientist to join our growing analytics team.",
      "You will work on complex data sets to solve business problems and drive decision-making.",
      "Collaborate with cross-functional teams to implement machine learning models."
    ],
    responsibilities: [
      "Develop and implement statistical and machine learning models",
      "Process, cleanse, and verify the integrity of data used for analysis",
      "Conduct data mining using state-of-the-art methods",
      "Present findings to stakeholders and make recommendations",
      "Create automated anomaly detection systems and constant tracking of its performance"
    ],
    role: "Data Scientist",
    industryType: "Analytics / KPO / Research",
    department: "Analytics",
    employmentType: "Full Time, Permanent",
    roleCategory: "Data Science & Analytics",
    education: {
      ug: "B.Tech/B.E. in Computer Science, Statistics or related field",
      pg: "M.Tech/MS in Data Science, Machine Learning or related field"
    },
    keySkills: [
      "Python",
      "R",
      "SQL",
      "Machine Learning",
      "Deep Learning",
      "Statistics",
      "Data Visualization"
    ],
    tags: ["Data Science", "Machine Learning", "Analytics", "Big Data"],
    aboutCompany: "DataMind Analytics is a data-driven company that provides advanced analytics solutions to businesses across various industries."
  },
  {
    id: 4,
    title: "DevOps Engineer",
    companyId: "102",
    company: "DataMind Analytics",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFrEHaJtr-L7g/company-logo_200_200/company-logo_200_200/0/1676687822078?e=2147483647&v=beta&t=EybQieXtE5sYqMf9QV6r-YuJP8NyV4nNkM01_xC2G20",
    rating: "3.8",
    reviews: 62,
    experience: "4 - 8 years",
    salary: "₹18,00,000 - ₹35,00,000 PA",
    location: "Gurgaon, Noida",
    duration: "Full Time",
    postedDate: "2 days ago",
    openings: 1,
    applicants: 45,
    matchScores: ["Keyskills", "Location"],
    description: [
      "We are seeking an experienced DevOps Engineer to join our infrastructure team.",
      "You will be responsible for maintaining and scaling our cloud-based systems.",
      "Work on improving our CI/CD pipelines and automate deployment processes."
    ],
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage and optimize cloud infrastructure on AWS and GCP",
      "Implement security best practices and ensure compliance",
      "Troubleshoot and resolve infrastructure issues",
      "Collaborate with development teams to improve deployment processes"
    ],
    role: "DevOps Engineer",
    industryType: "IT Services & Consulting",
    department: "Infrastructure & Cloud Operations",
    employmentType: "Full Time, Permanent",
    roleCategory: "DevOps & Cloud Infrastructure",
    education: {
      ug: "B.Tech/B.E. in Computer Science or related field",
      pg: "M.Tech (Preferred)"
    },
    keySkills: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "Linux",
      "Scripting (Python/Bash)"
    ],
    tags: ["DevOps", "Cloud", "CI/CD", "Infrastructure"],
    aboutCompany: "CloudTech Systems is a cloud solutions provider specializing in helping businesses migrate and optimize their infrastructure on cloud platforms."
  },
  {
    id: 5,
    title: "UI/UX Designer",
    companyId: "103",
    company: "CreativePixel Design Studio",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyUyPc4AUEEKcfqg6CRf-EF4iafOm6kaRhw&s",
    rating: "4.5",
    reviews: 39,
    experience: "2 - 6 years",
    salary: "₹8,00,000 - ₹18,00,000 PA",
    location: "Bangalore, Remote",
    duration: "Full Time",
    postedDate: "1 week ago",
    openings: 2,
    applicants: 120,
    matchScores: ["Keyskills", "Work Experience"],
    description: [
      "We're looking for a talented UI/UX Designer to create amazing user experiences.",
      "You will work on designing both web and mobile applications.",
      "Collaborate with product managers and developers to create intuitive, user-friendly designs."
    ],
    responsibilities: [
      "Create user-centered designs by understanding business requirements and user feedback",
      "Develop UI mockups and prototypes that clearly illustrate how sites function and look",
      "Conduct user research and evaluate user feedback",
      "Establish and promote design guidelines, best practices and standards",
      "Create original graphic designs (e.g. images, sketches and tables)"
    ],
    role: "UI/UX Designer",
    industryType: "Design & Creative",
    department: "Design",
    employmentType: "Full Time, Permanent",
    roleCategory: "Design & Creative",
    education: {
      ug: "Bachelor's degree in Design, Fine Arts or related field",
      pg: "Master's in Interaction Design or HCI (Preferred)"
    },
    keySkills: [
      "Adobe XD",
      "Figma",
      "Sketch",
      "InVision",
      "Prototyping",
      "Wireframing",
      "User Research"
    ],
    tags: ["UI Design", "UX Design", "Interaction Design", "Prototyping"],
    aboutCompany: "CreativePixel Design Studio is a boutique design agency known for creating beautiful and functional digital experiences for startups and enterprises alike."
  },
  {
    id: 6,
    title: "Product Manager",
    companyId: "103",
    company: "CreativePixel Design Studio",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyUyPc4AUEEKcfqg6CRf-EF4iafOm6kaRhw&s",
    rating: "4.3",
    reviews: 51,
    experience: "5 - 10 years",
    salary: "₹25,00,000 - ₹45,00,000 PA",
    location: "Bangalore, Mumbai, Delhi",
    duration: "Full Time",
    postedDate: "4 days ago",
    openings: 1,
    applicants: 85,
    matchScores: ["Keyskills", "Work Experience", "Location"],
    description: [
      "We are seeking an experienced Product Manager to lead the development of our flagship SaaS product.",
      "You will work closely with engineering, design, and marketing teams to drive product strategy and execution.",
      "This role requires a blend of business acumen, technical knowledge, and strong leadership skills."
    ],
    responsibilities: [
      "Define and execute product strategy aligned with company goals",
      "Gather and analyze feedback from customers, stakeholders and potential clients",
      "Work closely with engineering teams to deliver with quick time-to-market and optimal resources",
      "Develop product pricing and positioning strategies",
      "Act as a product evangelist to build awareness and understanding"
    ],
    role: "Product Manager",
    industryType: "Software Product",
    department: "Product Management",
    employmentType: "Full Time, Permanent",
    roleCategory: "Product Management",
    education: {
      ug: "B.Tech/B.E. or equivalent",
      pg: "MBA (Preferred)"
    },
    keySkills: [
      "Product Strategy",
      "Agile Methodologies",
      "Data Analysis",
      "User Story Mapping",
      "Roadmapping",
      "A/B Testing",
      "Product Analytics"
    ],
    tags: ["Product Management", "SaaS", "B2B", "Agile"],
    aboutCompany: "InnovateTech Solutions is a fast-growing SaaS company that provides cutting-edge business management solutions to enterprises worldwide."
  }
];

export const internshipListings = [
  {
      id: 1,
      title: 'Marketing Intern',
      company: "TechInnovate Solutions",
      companyId:"101",
      location: 'Bangalore',
      duration: '3 months',
      stipend: '₹15,000 /month',
      startDate: 'Immediately',
      logo: 'https://www.capboard.io/cms/assets/investor_listing/4445.png',
      tags: ['Marketing', 'Social Media'],
      skills: ['Content Creation', 'Social Media Management', 'Analytics'],
      responsibilities: [
          'Create engaging content for social media platforms',
          'Analyze marketing campaign performance',
          'Assist in developing marketing strategies'
      ],
      description: [
          'Exciting opportunity to work with a fast-growing tech startup',
          'Gain hands-on experience in digital marketing',
          'Work closely with experienced marketing professionals'
      ],
      aboutCompany: 'TechStart is an innovative startup focused on creating cutting-edge mobile applications.'
  },
  {
      id: 2,
      title: 'Web Development Intern',
      company: "TechInnovate Solutions",
      companyId:"101",
      location: 'Remote',
      duration: '6 months',
      stipend: '₹20,000 /month',
      startDate: '1st Aug 2024',
      logo: 'https://www.capboard.io/cms/assets/investor_listing/4445.png',
      tags: ['React', 'Node.js'],
      skills: ['JavaScript', 'React', 'Node.js', 'Git'],
      responsibilities: [
          'Develop and maintain web applications',
          'Collaborate with the team on new features',
          'Participate in code reviews and testing'
      ],
      description: [
          'Join a team of passionate developers working on exciting projects',
          'Opportunity to work on both frontend and backend technologies',
          'Flexible remote work environment'
      ],
      aboutCompany: 'CodeCraft is a leading software development company specializing in web and mobile applications.'
  },
  {
      id: 3,
      title: 'Data Science Intern',
      companyId: "102",
      company: "DataMind Analytics",
            location: 'Mumbai',
      duration: '4 months',
      stipend: '₹25,000 /month',
      startDate: '15th Jul 2024',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgyGqFm8Wd1TaxFYSqaBo92Speg_ZBkBXtA&s',
      tags: ['Python', 'Machine Learning'],
      skills: ['Python', 'Machine Learning', 'Data Visualization', 'SQL'],
      responsibilities: [
          'Assist in developing and implementing machine learning models',
          'Perform data cleaning and preprocessing tasks',
          'Create data visualizations to communicate insights'
      ],
      description: [
          'Work on real-world data science projects',
          'Learn from experienced data scientists and analysts',
          'Opportunity to contribute to cutting-edge AI research'
      ],
      aboutCompany: 'DataMinds is a pioneering AI research company focusing on developing innovative machine learning solutions.'
  },
  {
      id: 4,
      title: 'Graphic Design Intern',
      companyId: "102",
      company: "DataMind Analytics",
            location: 'Delhi',
      duration: '3 months',
      stipend: '₹12,000 /month',
      startDate: 'Immediately',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgyGqFm8Wd1TaxFYSqaBo92Speg_ZBkBXtA&s',
      tags: ['Adobe Creative Suite', 'UI/UX'],
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Design', 'Typography'],
      responsibilities: [
          'Create visually appealing graphics for various marketing materials',
          'Assist in developing brand identities for clients',
          'Contribute to UI/UX design projects'
      ],
      description: [
          'Immerse yourself in a creative environment',
          'Work on diverse design projects for various clients',
          'Receive mentorship from experienced designers'
      ],
      aboutCompany: 'CreativeHub is a dynamic design agency known for its innovative and eye-catching visual solutions.'
  },
  {
      id: 5,
      title: 'Content Writing Intern',
      companyId: "103",
      company: "CreativePixel Design Studio",      
      location: 'Remote',
      duration: '2 months',
      stipend: '₹10,000 /month',
      startDate: '1st Sep 2024',
      logo: 'https://www.digitalmarketingcommunity.com/wp-content/uploads/2018/12/Appnova.png',
      tags: ['Blogging', 'SEO'],
      skills: ['Content Writing', 'SEO', 'Research', 'Proofreading'],
      responsibilities: [
          'Write engaging blog posts and articles on various topics',
          'Optimize content for search engines',
          'Conduct research to ensure accuracy of information'
      ],
      description: [
          'Hone your writing skills in a professional setting',
          'Learn about SEO and content marketing strategies',
          'Work with a team of experienced writers and editors'
      ],
      aboutCompany: 'WordCraft is a content creation agency that provides high-quality written content for businesses across various industries.'
  },
  {
      id: 6,
      title: 'Mobile App Development Intern',
      companyId: "103",
      company: "CreativePixel Design Studio",      
      location: 'Hyderabad',
      duration: '5 months',
      stipend: '₹18,000 /month',
      startDate: '1st Oct 2024',
      logo: 'https://www.digitalmarketingcommunity.com/wp-content/uploads/2018/12/Appnova.png',
      tags: ['iOS', 'Android', 'Flutter'],
      skills: ['Flutter', 'Dart', 'Mobile UI Design', 'API Integration'],
      responsibilities: [
          'Assist in developing cross-platform mobile applications using Flutter',
          'Implement UI designs and ensure a smooth user experience',
          'Integrate RESTful APIs and third-party services'
      ],
      description: [
          'Gain hands-on experience in mobile app development',
          'Work on real projects that will be published on app stores',
          'Learn best practices in mobile development and app publishing'
      ],
      aboutCompany: 'AppNova is a mobile app development company known for creating innovative and user-friendly applications for both iOS and Android platforms.'
  }
];


 export const companies = [
  {
    name: "TechInnovate Solutions",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyR-eY6XruEswHpvpwCyz_GFbSd8odEyCXng&s",
    companyId: "101",
    industry: "Technology",
    location: "San Francisco, CA",
    employees: "5000+",
    rating: "4.7",
    openings: 25,
  },
  {
    name: "DevOps Engineer",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFrEHaJtr-L7g/company-logo_200_200/company-logo_200_200/0/1676687822078?e=2147483647&v=beta&t=EybQieXtE5sYqMf9QV6r-YuJP8NyV4nNkM01_xC2G20",
    companyId: "102",
    industry: "IT Services & Consulting",
    location: "San Francisco, CA",
    employees: "5000+",
    rating: "4.7",
    openings: 25,
  },
  {
    name: "CreativePixel Design Studio",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyUyPc4AUEEKcfqg6CRf-EF4iafOm6kaRhw&s",
    companyId: "103",
    industry: "Design & Creative",
    location: "San Francisco, CA",
    employees: "5000+",
    rating: "4.7",
    openings: 25,
  },
  // Add more company objects as needed
];