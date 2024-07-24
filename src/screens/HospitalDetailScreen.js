import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getHospitalDetails } from '../utils/api';
import HospitalImageDisplay from '../components/HospitalImageDisplay';
import ConfirmationModal from '../components/ConfirmationModal';

const HospitalDetailScreen = () => {
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchHospitalDetails = async () => {
      try {
        const response = await getHospitalDetails(id);
        setHospital(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hospital details:', error);
        setLoading(false);
      }
    };

    fetchHospitalDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

  const handleDeleteHospital = () => {
    // API call to delete the hospital (you need to implement this)
    // For now, we'll just hide the confirmation modal
    setShowDeleteConfirmation(false);
  };

  return (
    <div>
      <h1>{hospital.name}</h1>
      <HospitalImageDisplay images={hospital.images} />
      <p><b>City:</b> {hospital.city}</p>
      <p><b>Specialities:</b> {hospital.specialities.join(', ')}</p>
      <p><b>Rating:</b> {hospital.rating}</p>
      <p><b>Description:</b> {hospital.description}</p>
      <p><b>Number of Doctors:</b> {hospital.numDoctors}</p>
      <p><b>Number of Departments:</b> {hospital.numDepartments}</p>
      <button onClick={() => setShowDeleteConfirmation(true)}>Delete Hospital</button>

      {showDeleteConfirmation && (
        <ConfirmationModal
          title="Confirm Delete"
          message="Are you sure you want to delete this hospital?"
          onConfirm={handleDeleteHospital}
          onCancel={() => setShowDeleteConfirmation(false)}
        />
      )}
    </div>
  );
};

export default HospitalDetailScreen;