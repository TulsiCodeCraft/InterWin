import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const internshipListings = [
    {
        id: 1,
        title: 'Marketing Intern',
        company: 'TechStart',
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
        company: 'CodeCraft',
        location: 'Remote',
        duration: '6 months',
        stipend: '₹20,000 /month',
        startDate: '1st Aug 2024',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9-mSIkiGdEtwuFcHhVIgWNQAMMC3axNBYA&s',
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
        company: 'DataMinds',
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
        company: 'CreativeHub',
        location: 'Delhi',
        duration: '3 months',
        stipend: '₹12,000 /month',
        startDate: 'Immediately',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4-yB0_UVjc5dVt_SkGgLzXg9lXPqQzXIGw&s',
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
        company: 'WordCraft',
        location: 'Remote',
        duration: '2 months',
        stipend: '₹10,000 /month',
        startDate: '1st Sep 2024',
        logo: 'https://i0.wp.com/wordcraft.international/wp-content/uploads/2019/05/WOC_Blau.png?fit=1326%2C564&ssl=1',
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
        company: 'AppNova',
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

const InternshipListingPage = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState('');
    const [location, setLocation] = useState('');
    const [remote, setRemote] = useState(false);
    const [partTime, setPartTime] = useState(false);
    const [duration, setDuration] = useState('');
    const [stipend, setStipend] = useState(0);
    

    const InternshipCard = ({ internship }) => (
        <div 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-purple-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer mb-6"
            onClick={() => navigate(`/internship/${internship.id}`)}
        >
            <div className="flex justify-between items-start">
                <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-purple-700 hover:text-purple-900">{internship.title}</h3>
                    <p className="text-purple-600">{internship.company}</p>
                    <div className="flex items-center mt-2 text-sm text-purple-500">
                        <span>{internship.location}</span>
                        <span className="mx-2">•</span>
                        <span>{internship.duration}</span>
                        <span className="mx-2">•</span>
                        <span>{internship.stipend}</span>
                    </div>
                    <div className="mt-2 text-sm text-purple-500">
                        <span>Start Date: {internship.startDate}</span>
                    </div>
                    <div className="mt-3">
                        {internship.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <img src={internship.logo} alt={`${internship.company} logo`} className="w-16 h-16 object-contain rounded-full border-2 border-purple-200" />
            </div>
        </div>
    );

    return (
        <div className="container mx-auto p-4 bg-purple-50">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold">Kickstart Your Career with Exciting Internships!</h1>
                <p className="mt-2 text-purple-100">Find internships that align with your passion and skills</p>
            </div>

            <div className="bg-white p-4 mt-4 rounded-lg shadow-sm">
                <div className="flex items-center text-sm text-purple-600">
                    <span>Home</span>
                    <span className="mx-2">&gt;</span>
                    <span>Internships</span>
                </div>
                <h2 className="text-2xl font-bold mt-4 text-purple-800">2,500+ Internships</h2>
                <p className="text-sm text-purple-600">Apply to Latest Internship Opportunities Across India</p>
            </div>
            
            
            <div className="flex mt-6 space-x-6">
            <div className="w-1/4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-4 text-purple-800">Filters</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Profile</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="e.g. Marketing"
                                    value={profile}
                                    onChange={(e) => setProfile(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Location</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    placeholder="e.g. Delhi"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        checked={remote}
                                        onChange={(e) => setRemote(e.target.checked)}
                                    />
                                    <span className="ml-2">Remote</span>
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
                                <label className="block text-sm font-medium text-gray-700">Duration</label>
                                <select
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                >
                                    <option value="">Select duration</option>
                                    <option value="1-2">1-2 months</option>
                                    <option value="3-4">3-4 months</option>
                                    <option value="5-6">5-6 months</option>
                                    <option value="6+">6+ months</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Minimum Monthly Stipend</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="50000"
                                    step="1000"
                                    className="w-full"
                                    value={stipend}
                                    onChange={(e) => setStipend(parseInt(e.target.value))}
                                />
                                <div className="flex justify-between text-xs text-gray-600">
                                    <span>₹0</span>
                                    <span>₹50,000</span>
                                </div>
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
                                placeholder="e.g. Web Development, Bangalore, Google"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 hover:text-purple-700">
                                <Search size={20} />
                            </button>
                        </div>
                    </div>
                </div>
                
                
                <div className="w-3/4">
                    {internshipListings.map((internship, index) => (
                        <InternshipCard key={index} internship={internship} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InternshipListingPage;