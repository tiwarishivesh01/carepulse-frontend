import React, { useState, useEffect } from 'react';
import HospitalImageDisplay from './HospitalImageDisplay';
import MultiSelectDropdown from './MultiSelectDropdown';
import { getHospitalDetails } from '../utils/api';

const HospitalDetails = ({ match }) => {
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitalDetails = async () => {
      try {
        const response = await getHospitalDetails(match.params.id);
        setHospital(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hospital details:', error);
        setLoading(false);
      }
    };

    fetchHospitalDetails();
  }, [match.params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  return (
    <div>
      <h1>{hospital.name}</h1>
      <p>City: {hospital.city}</p>
      <HospitalImageDisplay images={[hospital.image, ...hospital.additionalImages]} />
      <h2>Specialities</h2>
      <MultiSelectDropdown options={hospital.specialities} disabled />
      <p>Rating: {hospital.rating}</p>
      <p>Description: {hospital.description}</p>
      <p>Number of Doctors: {hospital.numDoctors}</p>
      <p>Number of Departments: {hospital.numDepartments}</p>
    </div>
  );
};

export default HospitalDetails;