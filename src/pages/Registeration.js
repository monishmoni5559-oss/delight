import React, { useState } from 'react';
import { register } from './Auther';
import { useNavigate, Link } from 'react-router-dom';
import "./Register.css"

const Register = () => {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const [error, seterror] = useState('');
    const [success, setsuccess] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, password);
            setsuccess('Registered Successfully');
            seterror('');
            navigate('/login');
        } catch (err) {
            console.log('Registration Error', err);
            seterror('Registration Failed');
            setsuccess('');
        }
    };


    return (
        <>


            <div className="register-container">
                <div className="register-card">
                    <h2>Create Account </h2>
                    <p className="subtitle">Register a new account</p>


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


                        <button type="submit">Register</button>


                        {success && <p className="success">{success}</p>}
                        {error && <p className="error">{error}</p>}
                    </form>


                    <p className="login-text">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>


                    {/* <Link to="/" className="home-link">← Back to Home</Link> */}
                </div>
            </div>
        </>
    );
};


export default Register;
