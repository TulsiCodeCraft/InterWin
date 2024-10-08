import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RegistrationScreen = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const slides = [
        { image: "https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?size=626&ext=jpg", alt: "Career opportunities" },
        { image: "https://img.freepik.com/free-vector/hand-drawn-neuroeducation-illustration_23-2150945405.jpg?uid=R134930778&ga=GA1.1.185710264.1725692991&semt=ais_hybrid", alt: "Job search" },
        { image: "https://www.shutterstock.com/shutterstock/photos/2244218929/display_1500/stock-photo-door-with-job-signboard-large-yellow-location-mark-and-magnifying-glass-with-office-armchair-2244218929.jpg", alt: "Professional growth" },
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    // Handle input change for form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch('http://localhost:8800/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(data.message);
                setFormData({ username: '', email: '', phone: '', password: '' });
            } else {
                setError(data.message || 'Registration failed!');
            }
        } catch (err) {
            setError('An error occurred while registering.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden mt">

                <div className="w-1/2 bg-yellow-400 p-6 relative">
                    <div className="relative h-64 mt-8">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
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
                    <h2 className="text-2xl font-bold mb-6">Create an account</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder="Enter Name"
                            className="w-full p-2 border rounded"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter Email"
                            className="w-full p-2 border rounded"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter Phone No"
                            className="w-full p-2 border rounded"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter Password"
                            className="w-full p-2 border rounded"
                            required
                        />
                        <p className="text-sm">
                            Already have an account? <a href="#" className="text-blue-500 hover:text-blue-800">Login</a>
                        </p>
                        <button
                            type="submit"
                            className="w-96 mx-auto block bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                            onMouseEnter={() => setShowPopup(true)}
                            onMouseLeave={() => setShowPopup(false)}
                        >
                            Register
                        </button>
                        {showPopup && (
                            <div className="absolute bg-white border rounded p-2 shadow-md">
                                Click to create your account!
                            </div>
                        )}
                    </form>

                    {error && <p className="text-red-500 mt-4">{error}</p>}
                    {success && <p className="text-green-500 mt-4">{success}</p>}
                </div>
            </div>
        </div>
    );
};

export default RegistrationScreen;