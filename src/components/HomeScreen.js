import React from 'react';
import { Link } from 'react-router-dom';
import { HospitalList } from './HospitalList';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <h1>Welcome to Hospital Management System</h1>
      <p>Search and discover hospitals near you.</p>
      
      {/* Display a list of hospitals (up to 5) on the home screen */}
      <HospitalList limit={5} />

      <Link to="/hospitals">
        <button type="button">View All Hospitals</button>
      </Link>
    </div>
  );
};

export default HomeScreen;