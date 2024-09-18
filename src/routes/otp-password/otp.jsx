import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';

const OTPVerificationScreen = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [resendTimer, setResendTimer] = useState(36);

    const slides = [
        { image: "https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?size=626&ext=jpg", alt: "Career opportunities" },
        { image: "https://img.freepik.com/free-vector/hand-drawn-neuroeducation-illustration_23-2150945405.jpg?uid=R134930778&ga=GA1.1.185710264.1725692991&semt=ais_hybrid", alt: "Job search" },
        { image: "https://www.shutterstock.com/shutterstock/photos/2244218929/display_1500/stock-photo-door-with-job-signboard-large-yellow-location-mark-and-magnifying-glass-with-office-armchair-2244218929.jpg", alt: "Professional growth" },
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(() => {
            setResendTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleOtpChange = (index, value) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 5) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
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
                    <h2 className="text-2xl font-bold mb-2">Hi,</h2>
                    <h3 className="text-xl mb-6">Welcome Back to InterWin!</h3>
                    
                    <div className="bg-green-100 p-4 rounded-lg mb-6 flex items-start">
                        <Phone className="mr-2 flex-shrink-0" size={20} />
                        <div>
                            <p className="text-sm">
                                Enter the One Time Password (OTP) which has been sent to (9**9)
                            </p>
                            <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">
                                Change phone number
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-between mb-4">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 text-center border rounded-md"
                                value={digit}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                            />
                        ))}
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <p className="text-sm text-gray-600">
                            Didn't receive the OTP yet?{' '}
                            {resendTimer > 0 ? (
                                <span>Resend in {resendTimer} sec</span>
                            ) : (
                                <a href="#" className="text-blue-500 hover:text-blue-700">
                                    Resend OTP
                                </a>
                            )}
                        </p>
                    </div>

                    <a href="#" className="text-blue-500 hover:text-blue-700 block mb-6">
                        Login with password
                    </a>

                    <div className="flex justify-between">
                        <button
                            className="px-4 py-2 border rounded-md hover:bg-gray-100"
                            onClick={() => console.log('Back clicked')}
                        >
                            Back
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={() => console.log('Login clicked')}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OTPVerificationScreen;
