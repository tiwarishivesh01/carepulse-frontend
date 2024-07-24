import React, { useState } from 'react';
import MultiSelectDropdown from './MultiSelectDropdown';

const HospitalForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [specialities, setSpecialities] = useState([]);
  const [rating, setRating] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, city, imageUrl, specialities, rating });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>City:</label>
        <input 
          type="text" 
          value={city} 
          onChange={e => setCity(e.target.value)} 
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input 
          type="text" 
          value={imageUrl} 
          onChange={e => setImageUrl(e.target.value)} 
        />
      </div>
      <div>
        <label>Specialities:</label>
        <MultiSelectDropdown 
          options={['Cardiology', 'Neurology', 'Orthopedics', 'Gynecology']} 
          selectedOptions={specialities} 
          onOptionsChange={setSpecialities} 
        />
      </div>
      <div>
        <label>Rating:</label>
        <input 
          type="number" 
          min="1" 
          max="5" 
          value={rating} 
          onChange={e => setRating(e.target.value)} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HospitalForm;