import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React from "react";

function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="bg-white p-6 rounded shadow-lg w-96 md:w-1/2 lg:w-1/3"> {/* Made the form wider */}
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 mb-1">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already Have an Account? 
                    <Link to="/login" className="block mt-2 text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
            <img 
                src="https://img.freepik.com/free-vector/man-having-online-job-interview_52683-43379.jpg?size=626&ext=jpg" 
                alt="Description" 
                className="hidden md:block md:w-1/3 rounded-lg shadow-lg ml-8" 
            /> 
        </div>
    );
}

export default Register;