import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export const jobListings = [

  {
    id: 1,
    title: "Backend Developer",
    company: "Surge Technology Solutions Inc",
    logo: "data:image/png;base64,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",
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
    id: 3,
    title: "Data Scientist",
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
    company: "CloudTech Systems",
    logo: "https://www.shutterstock.com/image-vector/cloud-tech-logo-vector-template-600nw-2027054489.jpg",
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
    company: "InnovateTech Solutions",
    logo: "https://www.logoai.com/uploads/output/2023/05/04/5a30e372c9bf85a9436afc6290a8aae8.jpg?t=1683192040",
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


const JobListingPage = () => {
  const [profile, setProfile] = useState('');
  const [location, setLocation] = useState('');
  const [workFromHome, setWorkFromHome] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [salary, setSalary] = useState(0);
  const [experience, setExperience] = useState('');

  const JobCard = ({ job }) => (
    <Link to={`/job/${job.id}`} className="block">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-purple-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer mb-6">
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-purple-700 hover:text-purple-900">{job.title}</h3>
            <p className="text-purple-600">{job.company}</p>
            <div className="flex items-center mt-2 text-sm text-purple-500">
              <span>{job.location}</span>
              <span className="mx-2">•</span>
              <span>{job.experience}</span>
              <span className="mx-2">•</span>
              <span>{job.salary}</span>
            </div>
            <div className="mt-3">
              {job.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 object-contain rounded-full border-2 border-purple-200" />
        </div>
      </div>
    </Link>
  );

  return (
    <div className="container mx-auto p-4 bg-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Skills That Shine, Jobs That Align!</h1>
        <p className="mt-2 text-purple-100">Find jobs with salaries up to ₹30 LPA</p>
      </div>

      {/* Job count and breadcrumb */}
      <div className="bg-white p-4 mt-4 rounded-lg shadow-sm">
        <div className="flex items-center text-sm text-purple-600">
          <span>Home</span>
          <span className="mx-2">&gt;</span>
          <span>Jobs</span>
        </div>
        <h2 className="text-2xl font-bold mt-4 text-purple-800">{jobListings.length} Jobs</h2>
        <p className="text-sm text-purple-600">Search and Apply to Latest Job Vacancies & Openings in India</p>
      </div>

      {/* Main content */}
      <div className="flex mt-6 space-x-6">
        {/* Sidebar */}
        <div className="w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-purple-800">Filters</h3>
            {/* ... (include all filter inputs) */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Profile</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="e.g. Data Analyst"
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="e.g. Mumbai"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    checked={workFromHome}
                    onChange={(e) => setWorkFromHome(e.target.checked)}
                  />
                  <span className="ml-2">Work from home</span>
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    checked={partTime}
                    onChange={(e) => setPartTime(e.target.checked)}
                  />
                  <span className="ml-2">Part-time</span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Annual salary (in lakhs)</label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  className="w-full"
                  value={salary}
                  onChange={(e) => setSalary(parseFloat(e.target.value))}
                />
                <div className="flex justify-between text-xs text-gray-600">
                  <span>0</span>
                  <span>10</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Years of experience</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="">Select years of experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300 mt-4">
              Clear all
            </button>
          </div>
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <p className="text-center text-purple-600 mb-3">OR</p>
            <div className="relative">
              <input
                type="text"
                className="block w-full rounded-lg border-purple-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 pr-10"
                placeholder="e.g. Design, Mumbai, Infosys"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 hover:text-purple-700">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Job listings */}
        <div className="w-3/4">
          {jobListings.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListingPage;