import React from 'react';

const CityFilter = () => {
  const cities = ['City A', 'City B', 'City C'];

  const handleCityChange = (event) => {
    // Handle city selection logic here
    console.log('Selected city:', event.target.value);
  };

  return (
    <div>
      <label htmlFor="city-filter">Filter by City:</label>
      <select id="city-filter" onChange={handleCityChange}>
        <option value="">All Cities</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;