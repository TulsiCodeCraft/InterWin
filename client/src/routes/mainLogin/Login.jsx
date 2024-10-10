
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

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Login = () => {
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
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to right, #60a5fa, #a78bfa)'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '24rem'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#1f2937',
          marginBottom: '1.5rem'
        }}>Login</h2>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <div>
            <label htmlFor="email" style={{display: 'block', marginBottom: '0.5rem', color: '#4b5563'}}>Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.25rem'
              }}
            />
          </div>
          <div>
            <label htmlFor="password" style={{display: 'block', marginBottom: '0.5rem', color: '#4b5563'}}>Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.25rem'
              }}
            />
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '0.5rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}>
            Login
          </button>
        </form>
        <p style={{
          marginTop: '1rem',
          fontSize: '0.875rem',
          color: '#4b5563',
          textAlign: 'center'
        }}>
          Don't have an account?{" "}
          <Link to="/register" style={{color: '#3b82f6', textDecoration: 'none'}}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};


export default Login;