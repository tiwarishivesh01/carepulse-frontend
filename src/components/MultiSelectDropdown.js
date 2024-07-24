import React, { useState } from 'react';

const MultiSelectDropdown = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((opt) => opt !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
    onChange(updatedOptions);
  };

  return (
    <div>
      <label>Specialities:</label>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleChange(option)}
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default MultiSelectDropdown;