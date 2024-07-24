import React, { useState, useEffect } from 'react';
import { getHospitalsByCity } from '../utils/api';

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const [city, setCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHospitalsByCity(city);
        setHospitals(response.data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchData();
  }, [city]);

  useEffect(() => {
    const filtered = hospitals.filter(hospital =>
      hospital.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHospitals(filtered);
  }, [hospitals, searchTerm]);

  const handleCityChange = event => {
    setCity(event.target.value);
  };

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Hospitals by City</h2>
      <div>
        <label htmlFor="city-filter">Select City:</label>
        <select id="city-filter" value={city} onChange={handleCityChange}>
          <option value="">All Cities</option>
          {/* Dynamically populate city options based on hospital data */}
          {hospitals.map(hospital => (
            <option key={hospital.id} value={hospital.city}>{hospital.city}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="search-bar">Search Hospitals:</label>
        <input type="text" id="search-bar" value={searchTerm} onChange={handleSearchChange} />
      </div>
      <ul>
        {filteredHospitals.map(hospital => (
          <li key={hospital.id}>
            <div>
              <strong>Name:</strong> {hospital.name}
              

              <strong>City:</strong> {hospital.city}
              

              {/* Display other hospital details as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;