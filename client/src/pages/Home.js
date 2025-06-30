import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-box">
        <h1>Welcome to My Full Stack App</h1>
        <div className="home-buttons">
          <Link to="/register" className="btn">Register</Link>
          <Link to="/login" className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
