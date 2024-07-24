import React from 'react';

const HospitalImageDisplay = ({ imageUrl }) => {
  return (
    <div className="hospital-image">
      <img src={imageUrl} alt="Hospital Image" />
    </div>
  );
};

export default HospitalImageDisplay;