import React, { useState } from 'react';
import { login } from './Auther';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "./Register.css"

const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState('');
    const [success, setsuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            setsuccess('Successfully Logged In');
            seterror('');
            navigate('/');
        } catch (err) {
            console.log('Login Error', err);
            seterror('Login Failed');
            setsuccess('');
        }
    };

    return (
        <>
            {/* SAME container & card */}
            <div className="register-container">
                <div className="register-card">
                    <h2>Welcome Back </h2>
                    <p className="subtitle">Login to your account</p>

                    <form onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                            placeholder="Enter your username"
                            required
                        />

                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />

                        <button type="submit">Login</button>

                        {success && <p className="success">{success}</p>}
                        {error && <p className="error">{error}</p>}
                    </form>

                    {/* Reuse same text style */}
                    <p className="login-text">
                        Don’t have an account? <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;
