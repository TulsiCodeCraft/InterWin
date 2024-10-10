import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="flex justify-center items-center bg-gray-200 min-h-screen">
            <div className="flex flex-col justify-center items-center md:w-2/3 lg:w-1/2 space-y-6 bg-white p-8 rounded shadow-lg">
                {/* Form Container */}
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600 mb-1">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600 mb-1">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link to="/register" className="text-blue-500 hover:underline">
                            Don't have an account?
                        </Link>
                    </div>
                </div>
            </div>
            <img
                src="https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?size=626&ext=jpg"
                alt="Job interview"
                className="hidden md:block md:w-1/3 rounded-lg shadow-lg ml-8"
            />
        </div>
    );
}

export default Login;