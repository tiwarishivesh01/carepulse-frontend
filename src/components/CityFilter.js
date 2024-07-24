import React, { useState } from 'react';

const CityFilter = ({ onFilterChange }) => {
    const [selectedCity, setSelectedCity] = useState('');

    const handleChange = (event) => {
        setSelectedCity(event.target.value);
        onFilterChange(event.target.value);
    };

    return (
        <div>
            <label htmlFor="city-filter">Filter by City:</label>
            <select id="city-filter" value={selectedCity} onChange={handleChange}>
                <option value="">All Cities</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                {/* Add more cities as needed */}
            </select>
        </div>
    );
};

export default CityFilter;