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

export const Companies = [
  {
    id: 1,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
  },
  {
    id: 2,
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
  },
  {
    id: 3,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
  },

  {
    id: 4,
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
  },
];
export const mockInterviewData = [
  {
    id: 1,
    position: "Frontend Developer",
    image: "https://img.freepik.com/free-vector/app-development-concept-design_23-2148670525.jpg?t=st=1726203052~exp=1726206652~hmac=83050eb3f4dbd3d9595cddda918ebb784f7816ac6e51a985702e4104e7eb9310&w=826",
    questions: [
      "What is React?", 
      "Explain hooks in React.", 
      "What is Redux?", 
      "Explain Redux in React.", 
      "What is the virtual DOM and how does it work?", 
      "What are the differences between React and Angular?", 
      "What are the lifecycle methods in React?", 
      "Explain the concept of JSX in React.", 
      "What are React fragments?", 
      "How does React handle events?",
      "What is the role of Webpack in a React application?",
      "What is lazy loading in React?"
    ],
  },
  {
    id: 2,
    position: "Backend Developer",
    image: "https://img.freepik.com/free-photo/joint-work-talented-programmers_1098-17280.jpg?t=st=1726203096~exp=1726206696~hmac=4f22d685f435aa28b34f6f88fb4932b1902cfafae369c08df4946493aaac33af&w=996",
    questions: [
      "What is Node.js?", 
      "Explain RESTful APIs.", 
      "What are the advantages of using Express.js?", 
      "Explain how middleware works in Express.", 
      "What is the difference between SQL and NoSQL databases?", 
      "Explain the use of JWT for authentication.", 
      "How do you manage sessions in Node.js?", 
      "What is clustering in Node.js?", 
      "Explain event-driven architecture in Node.js.", 
      "What is CORS and how do you handle it in backend development?"
    ],
  },
  {
    id: 3,
    position: "Fullstack Developer",
    image: "https://img.freepik.com/free-photo/side-view-attractive-hispanic-software-developer-programming-using-computer-while-working-from-home_662251-958.jpg?t=st=1726203200~exp=1726206800~hmac=f05a08df767610fa5daf4fa8808406284e7607e6e93e3570bb05840c15fce6ed&w=740",
    questions: [
      "How do you handle state management in React and Node?", 
      "Explain the architecture of a full-stack MERN application.", 
      "What are the main challenges when working on both frontend and backend?", 
      "How do you manage user authentication in a full-stack application?", 
      "Explain the role of APIs in full-stack development.", 
      "What are some common security practices in full-stack development?", 
      "How do you handle database connections in a full-stack app?", 
      "What is server-side rendering and how does it differ from client-side rendering?", 
      "Explain how you would deploy a full-stack application.", 
      "How do you optimize a full-stack application for scalability?"
    ],
  },
  {
    id: 4,
    position: "Data Scientist",
    image: "https://img.freepik.com/free-photo/back-shot-overwhelmed-woman-working-night-front-computer-writing-notes-notebook-annual-reports-checking-financial-deadline_482257-5154.jpg?t=st=1726203228~exp=1726206828~hmac=d9a90c2c8388ab777fb5a37551a276da915300087fd0d8618b4c0aca79886947&w=996",
    questions: [
      "What is machine learning?", 
      "Explain how it works in real life.", 
      "What are the different types of machine learning algorithms?", 
      "What is the difference between supervised and unsupervised learning?", 
      "Explain the concept of overfitting in machine learning.", 
      "What is cross-validation and why is it important?", 
      "How do you handle missing data in a dataset?", 
      "What is feature engineering in data science?", 
      "Explain the difference between precision and recall.", 
      "How would you deploy a machine learning model?"
    ],
  },
  {
    id: 5,
    position: "UI UX Designer",
    image: "https://img.freepik.com/free-vector/interaction-design-concept-illustration_114360-4520.jpg?uid=R116847921&ga=GA1.1.416656702.1720072909&semt=ais_hybrid",
    questions: [
      "What is UI/UX?", 
      "Explain how it works in real life.", 
      "What are the key differences between UI and UX design?", 
      "Explain the importance of user research in UX design.", 
      "What is wireframing and why is it important?", 
      "How do you approach creating personas in UX design?", 
      "Explain the concept of a user journey map.", 
      "How do you conduct usability testing?", 
      "What is responsive design and why is it important?", 
      "How do you incorporate accessibility into your designs?"
    ],
  },
  {
    id: 6,
    position: "Graphic Designer",
    image: "https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg?t=st=1726203312~exp=1726206912~hmac=e307500a017d06f25dcc2e9428b7685d35041f4377c1f0fdde29f5266c4d38e9&w=900",
    questions: [
      "What is graphic design?", 
      "Explain how it works in real life.", 
      "What are the basic principles of graphic design?", 
      "How do you approach designing for different mediums (print vs. digital)?", 
      "What is the role of typography in graphic design?", 
      "Explain the importance of color theory in design.", 
      "How do you ensure that your design communicates the intended message?", 
      "What are some popular tools used in graphic design?", 
      "Explain the difference between raster and vector graphics.", 
      "How do you handle feedback on your designs?"
    ],
  },
  {
    id: 7,
    position: "Content Writer",
    image: "https://img.freepik.com/free-vector/content-author-writer-job-concept_74855-7064.jpg?t=st=1726203370~exp=1726206970~hmac=e7a64adaac7782916a3291096892da6e73e516564679f508491992a365a266dd&w=826",
    questions: [
      "What is content writing?", 
      "Explain how it works in real life.", 
      "How do you approach writing for different audiences?", 
      "What are the key components of SEO writing?", 
      "How do you ensure content is engaging?", 
      "What tools do you use for content research?", 
      "Explain the importance of headlines and subheadings in content.", 
      "How do you measure the success of your content?", 
      "What role does editing play in content creation?", 
      "How do you handle writer's block?"
    ],
  },
  {
    id: 8,
    position: "Product Manager",
    image: "https://img.freepik.com/free-photo/portrait-asian-woman-business-owner-using-digital-tablet-checking-amount-stock-product-inventory-shelf-distribution-warehouse-factorylogistic-business-shipping-delivery-service_609648-2022.jpg?t=st=1726308192~exp=1726311792~hmac=72e63c4b4cb6b296b0393e6a314c6821ba24274b57b7e649714e129993bdc37a&w=996",
    questions: [
      "What is product management?", 
      "Explain how it works in real life.", 
      "How do you prioritize features in a product roadmap?", 
      "What is the role of market research in product development?", 
      "How do you handle stakeholder expectations?", 
      "What are the key metrics you track for product success?", 
      "Explain the concept of product-market fit.", 
      "How do you manage a cross-functional team?", 
      "What is a minimum viable product (MVP)?", 
      "How do you handle a product failure?"
    ],
  },
  {
    id: 9,
    position: "Software Engineer",
    image: "https://img.freepik.com/free-vector/professional-programmer-engineer-writing-code_3446-693.jpg?t=st=1726308231~exp=1726311831~hmac=7cabc6ab0790b3487608ea508f847dfff44125e8aebaf067e5763f9d220ede75&w=740",
    questions: [
      "What is software engineering?", 
      "Explain how it works in real life.", 
      "What are the key principles of object-oriented programming?", 
      "How do you approach debugging in software development?", 
      "What are some common design patterns in software engineering?", 
      "How do you ensure code quality in a large project?", 
      "What is version control and why is it important?", 
      "Explain the concept of continuous integration and continuous deployment.", 
      "What is unit testing and why is it important?", 
      "How do you manage technical debt in a project?"
    ],
  },
  {
    id: 10,
    position: "Data Analyst",
    image: "https://img.freepik.com/free-photo/consulting-with-colleague_1098-15099.jpg?t=st=1726308261~exp=1726311861~hmac=ffa3e44de70735449764d100339ac14fdb6fec05bc895e1781ba8d7ebb832da2&w=996",
    questions: [
      "What is data analysis?", 
      "Explain how it works in real life.", 
      "What are the different types of data analysis?", 
      "How do you handle missing or incomplete data?", 
      "Explain the difference between correlation and causation.", 
      "What are some common data visualization tools?", 
      "How do you ensure data accuracy?", 
      "What is the importance of statistical analysis in data analysis?", 
      "Explain the concept of data cleaning.", 
      "How do you communicate data insights to non-technical stakeholders?"
    ],
  },
];


export const practiceData = [
  {
    id: 1,
    position: "Frontend Developer",
    tasks: {
      HTML: [
        { task: "Build a responsive navigation bar.", completed: false },
        { task: "Implement a form with validation.", completed: false },
      ],
      CSS: [
        { task: "Optimize a web page for performance.", completed: false },
        { task: "Use CSS Grid and Flexbox to build a layout.", completed: false },
      ],
    },
    resources: [
      { title: "React Documentation", link: "https://reactjs.org/docs/getting-started.html" },
      { title: "CSS Tricks: Flexbox", link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
    ],
  },
  {
    id: 2,
    position: "Backend Developer",
    tasks: {
      APIs: [
        { task: "Create a RESTful API with Node.js.", completed: false },
        { task: "Implement JWT authentication.", completed: false },
      ],
      Database: [
        { task: "Set up a MongoDB database.", completed: false },
        { task: "Use PostgreSQL for data persistence.", completed: false },
      ],
    },
    resources: [
      { title: "Node.js Express Guide", link: "https://expressjs.com/en/starter/installing.html" },
      { title: "MongoDB Documentation", link: "https://docs.mongodb.com/" },
    ],
  },
  {
    id: 3,
    position: "Fullstack Developer",
    tasks: {
      MERN: [
        { task: "Build a full-stack MERN application.", completed: false },
        { task: "Set up React on the frontend and Express on the backend.", completed: false },
      ],
      Deployment: [
        { task: "Deploy the app using Heroku or Netlify.", completed: false },
        { task: "Integrate user authentication and authorization.", completed: false },
      ],
    },
    resources: [
      { title: "MERN Stack Tutorial", link: "https://www.mongodb.com/mern-stack" },
      { title: "Heroku Deployment Guide", link: "https://devcenter.heroku.com/articles/deploying-nodejs" },
    ],
  },
  {
    id: 4,
    position: "Data Scientist",
    tasks: {
      EDA: [
        { task: "Perform exploratory data analysis (EDA) on a dataset.", completed: false },
        { task: "Build a machine learning model with Python.", completed: false },
      ],
      Evaluation: [
        { task: "Evaluate model performance using metrics.", completed: false },
        { task: "Use visualization tools like Matplotlib and Seaborn.", completed: false },
      ],
    },
    resources: [
      { title: "Pandas Documentation", link: "https://pandas.pydata.org/docs/" },
      { title: "Scikit-Learn Guide", link: "https://scikit-learn.org/stable/" },
    ],
  },
  {
    id: 5,
    position: "UI UX Designer",
    tasks: {
      Prototyping: [
        { task: "Create wireframes and prototypes for a mobile app.", completed: false },
        { task: "Design a user-friendly website using Figma.", completed: false },
      ],
      Research: [
        { task: "Conduct user research and create personas.", completed: false },
        { task: "Perform usability testing on your prototype.", completed: false },
      ],
    },
    resources: [
      { title: "Figma Design Basics", link: "https://www.figma.com/resources/learn-design/" },
      { title: "User Research Guide", link: "https://www.nngroup.com/articles/user-research-methods/" },
    ],
  },
  {
    id: 6,
    position: "Graphic Designer",
    tasks: {
      Design: [
        { task: "Design a logo using Adobe Illustrator.", completed: false },
        { task: "Create social media graphics for a brand.", completed: false },
      ],
      Branding: [
        { task: "Design a print-ready business card.", completed: false },
        { task: "Develop a brand color palette and typography.", completed: false },
      ],
    },
    resources: [
      { title: "Adobe Illustrator Basics", link: "https://helpx.adobe.com/illustrator/tutorials.html" },
      { title: "Graphic Design Principles", link: "https://www.canva.com/learn/graphic-design-principles/" },
    ],
  },
  {
    id: 7,
    position: "Content Writer",
    tasks: {
      SEO: [
        { task: "Write an SEO-optimized blog post.", completed: false },
        { task: "Create a content calendar for a website.", completed: false },
      ],
      Editing: [
        { task: "Write engaging social media posts.", completed: false },
        { task: "Edit content for grammar and readability.", completed: false },
      ],
    },
    resources: [
      { title: "SEO Writing Guide", link: "https://moz.com/learn/seo/content" },
      { title: "Grammarly Writing Tips", link: "https://www.grammarly.com/blog/" },
    ],
  },
  {
    id: 8,
    position: "Product Manager",
    tasks: {
      Roadmapping: [
        { task: "Create a product roadmap for a new feature.", completed: false },
        { task: "Define key performance indicators (KPIs) for a product.", completed: false },
      ],
      Research: [
        { task: "Conduct market research and analyze competitors.", completed: false },
        { task: "Work with a cross-functional team to plan a sprint.", completed: false },
      ],
    },
    resources: [
      { title: "Product Management Essentials", link: "https://www.productplan.com/learn/what-is-product-management/" },
      { title: "Agile Methodology Guide", link: "https://www.atlassian.com/agile" },
    ],
  },
  {
    id: 9,
    position: "Software Engineer",
    tasks: {
      SoftwareDevelopment: [
        { task: "Develop a software system with object-oriented principles.", completed: false },
        { task: "Implement data structures and algorithms in a project.", completed: false },
      ],
      Testing: [
        { task: "Write unit and integration tests for the system.", completed: false },
        { task: "Optimize the application for scalability.", completed: false },
      ],
    },
    resources: [
      { title: "Data Structures and Algorithms", link: "https://www.geeksforgeeks.org/data-structures/" },
      { title: "Clean Code Practices", link: "https://www.cleancoder.com/" },
    ],
  },
  {
    id: 10,
    position: "Data Analyst",
    tasks: {
      Visualization: [
        { task: "Create dashboards using data visualization tools.", completed: false },
        { task: "Use Power BI or Tableau to present insights.", completed: false },
      ],
      Analysis: [
        { task: "Analyze datasets using Excel or SQL.", completed: false },
        { task: "Perform statistical analysis to find trends.", completed: false },
      ],
    },
    resources: [
      { title: "Power BI Learning Path", link: "https://docs.microsoft.com/en-us/power-bi/guided-learning/" },
      { title: "SQL for Data Analysis", link: "https://www.sqltutorial.org/" },
    ],
  },
];


