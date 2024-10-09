import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Mail, Phone } from 'lucide-react';

const ForgotPasswordScreen = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [contactMethod, setContactMethod] = useState('email');
    const [contactInfo, setContactInfo] = useState('');

    const slides = [
        { image: "https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?size=626&ext=jpg", alt: "Career opportunities" },
        { image: "https://img.freepik.com/free-vector/hand-drawn-neuroeducation-illustration_23-2150945405.jpg?uid=R134930778&ga=GA1.1.185710264.1725692991&semt=ais_hybrid", alt: "Job search" },
        { image: "https://www.shutterstock.com/shutterstock/photos/2244218929/display_1500/stock-photo-door-with-job-signboard-large-yellow-location-mark-and-magnifying-glass-with-office-armchair-2244218929.jpg", alt: "Professional growth" },
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Reset password request sent to ${contactInfo} via ${contactMethod}`);
        // Here you would typically send a request to your backend
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-1/2 bg-yellow-400 p-6 relative">
                    <div className="relative h-64 mt-8">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-500 ${
                                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.alt}
                                    className="w-full h-80 object-cover"
                                />
                            </div>
                        ))}
                        <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

               
                <div className="w-1/2 p-6">
                    <h2 className="text-2xl font-bold mb-2">Forgot Password?</h2>
                    <h3 className="text-xl mb-6">No worries, we'll send you reset instructions.</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Reset password via:
                            </label>
                            <div className="flex space-x-4">
                                <button
                                    type="button"
                                    className={`flex items-center px-3 py-2 border rounded-md ${
                                        contactMethod === 'email' ? 'bg-blue-100 border-blue-500' : 'bg-gray-100'
                                    }`}
                                    onClick={() => setContactMethod('email')}
                                >
                                    <Mail size={16} className="mr-2" />
                                    Email
                                </button>
                                <button
                                    type="button"
                                    className={`flex items-center px-3 py-2 border rounded-md ${
                                        contactMethod === 'phone' ? 'bg-blue-100 border-blue-500' : 'bg-gray-100'
                                    }`}
                                    onClick={() => setContactMethod('phone')}
                                >
                                    <Phone size={16} className="mr-2" />
                                    Phone
                                </button>
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700 mb-1">
                                {contactMethod === 'email' ? 'Email address' : 'Phone number'}
                            </label>
                            <input
                                type={contactMethod === 'email' ? 'email' : 'tel'}
                                id="contactInfo"
                                className="w-full p-2 border rounded-md"
                                placeholder={contactMethod === 'email' ? 'Enter your email' : 'Enter your phone number'}
                                value={contactInfo}
                                onChange={(e) => setContactInfo(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Send reset instructions
                        </button>
                    </form>

                    <div className="mt-6">
                        <a href="#" className="text-blue-500 hover:text-blue-700">
                            Back to login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordScreen;