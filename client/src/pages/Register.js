import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../services/api';
import './Register.css';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Registration failed');
    }
  };

  return (
    <div className="form-page">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          <button type="submit">Register</button>
          {error && <p className="error">{error}</p>}
          <Link to="/" className="home-btn">Back to Home</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
