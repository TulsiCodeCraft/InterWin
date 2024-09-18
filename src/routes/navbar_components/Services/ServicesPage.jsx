import React from 'react';
import { Search, Briefcase, Users, Clock, TrendingUp, Zap, Mail } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, price }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
    <div className="flex items-center mb-4">
      <Icon className="mr-2 text-blue-500" size={24} />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <p className="text-lg font-bold text-green-600 mb-4">{price}</p>
    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:from-purple-600 hover:to-blue-600 py-2 px-4 rounded">
      Book Now
    </button>
  </div>
);

const ServicesPage = () => (
  <div className="bg-gray-50 min-h-screen">
    <header className="bg-purple-600 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Our Career Services</h1>
        <p className="text-xl mb-8">Empowering your career journey with expert guidance and support</p>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for a service..." 
            className="w-full pl-10 pr-4 py-3 rounded-lg text-black"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
    </header>

    <main className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          icon={Briefcase}
          title="Resume Writing"
          description="Get a professionally crafted resume that highlights your strengths and catches employers' attention."
          price="Starting at $99"
        />
        <ServiceCard 
          icon={Users}
          title="Career Counseling"
          description="One-on-one sessions with expert career counselors to guide your professional development."
          price="$75 per session"
        />
        <ServiceCard 
          icon={Clock}
          title="Interview Preparation"
          description="Mock interviews and personalized feedback to boost your confidence and performance."
          price="$120 for 2 sessions"
        />
        <ServiceCard 
          icon={TrendingUp}
          title="Skill Assessment"
          description="Comprehensive evaluation of your skills to identify areas for improvement and growth."
          price="$89 per assessment"
        />
        <ServiceCard 
          icon={Zap}
          title="Job Search Strategy"
          description="Tailored strategies to optimize your job search and increase your chances of landing your dream role."
          price="Starting at $150"
        />
        <ServiceCard 
          icon={Mail}
          title="Application Review"
          description="Expert review and optimization of your job applications to maximize your success rate."
          price="$50 per application"
        />
      </div>
    </main>

    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">Ready to take your career to the next level?</p>
        <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-white hover:border-transparent rounded">
          Contact Us
        </button>
      </div>
    </footer>
  </div>
);

export default ServicesPage;