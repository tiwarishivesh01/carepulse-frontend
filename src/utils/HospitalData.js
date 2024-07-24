import { useState, useEffect } from 'react';
import { getHospitalsByCity } from './api';

const useHospitalData = (city) => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHospitalsByCity(city);
        setHospitals(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hospital data:', error);
        setLoading(false);
      }
    };

    if (city) {
      fetchData();
    }
  }, [city]);

  return { hospitals, loading };
};

export default useHospitalData;

const initialHospitals = [
  {
    id: 1,
    name: "City Hospital",
    city: "Metro City",
    imageUrl: "https://example.com/city-hospital.jpg",
    specialities: ["Cardiology", "Orthopedics"],
    rating: 4.5,
    description: "Leading hospital with advanced facilities.",
    images: ["https://example.com/city-hospital1.jpg", "https://example.com/city-hospital2.jpg"],
    numDoctors: 50,
    numDepartments: 10
  },
  // Add more hospitals here...
];

// Function to add a new hospital
function addHospital(hospital) {
  hospital.id = Date.now(); // Generate a unique ID
  initialHospitals.push(hospital);
}

// Function to update hospital details
function updateHospital(id, updatedHospital) {
  const index = initialHospitals.findIndex(
    (hospital) => hospital.id === id
  );
  if (index !== -1) {
    initialHospitals[index] = {
      ...initialHospitals[index],
      ...updatedHospital,
    };
  }
}

// Function to delete a hospital
function deleteHospital(id) {
  const index = initialHospitals.findIndex(
    (hospital) => hospital.id === id
  );
  if (index !== -1) {
    initialHospitals.splice(index, 1);
  }
}

// Export the functions and initial hospitals
export { addHospital, updateHospital, deleteHospital, getHospitalById, initialHospitals };