import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="home-container">
        <h1>Welcome to Hospital Management System</h1>
        <p>A platform to manage and discover hospitals.</p>

        <div className="feature-section">
          <h2>Features</h2>
          <ul>
            <li>Easily add and update hospital information.</li>
            <li>Search and filter hospitals by city.</li>
            <li>View detailed hospital profiles.</li>
            <li>Connect with healthcare providers.</li>
          </ul>
        </div>

        <div className="get-started-section">
          <h2>Get Started</h2>
          <Link to="/hospitals">
            <button className="get-started-button">Explore Hospitals</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;