import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Welcome to the Dashboard</h2>
        <p>You are successfully logged in.</p>

        <div className="info-box">
          <h3>🌐 Full Stack App</h3>
          <p>This is a protected page that only logged-in users can access.</p>
        </div>

        <button onClick={handleLogout}>Logout</button>

        {/* HOME BUTTON BELOW LOGOUT */}
        <Link to="/" className="home-btn">Back to Home</Link>
      </div>
    </div>
  );
}

export default Dashboard;
