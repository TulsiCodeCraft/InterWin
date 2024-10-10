import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to right, #4ade80, #3b82f6)'
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
        }}>Register</h2>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <div>
            <label htmlFor="name" style={{display: 'block', marginBottom: '0.5rem', color: '#4b5563'}}>Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            Register
          </button>
        </form>
        <p style={{
          marginTop: '1rem',
          fontSize: '0.875rem',
          color: '#4b5563',
          textAlign: 'center'
        }}>
          Already have an account?{" "}
          <Link to="/login" style={{color: '#3b82f6', textDecoration: 'none'}}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

