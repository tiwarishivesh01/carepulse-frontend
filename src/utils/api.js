import axios from 'axios';

const API_BASE_URL = 'https://your-hospital-api.com/api/';

export const getHospitals = () => {
  return axios.get(API_BASE_URL + 'hospitals');
};

export const getHospitalsByCity = (city) => {
  return axios.get(API_BASE_URL + `hospitals?city=${city}`);
};

export const getHospitalById = (id) => {
  return axios.get(API_BASE_URL + 'hospitals/' + id);
};

export const addHospital = (hospitalData) => {
  return axios.post(API_BASE_URL + 'hospitals', hospitalData);
};

export const updateHospital = (id, updatedData) => {
  return axios.put(API_BASE_URL + 'hospitals/' + id, updatedData);
};

export const deleteHospital = (id) => {
  return axios.delete(API_BASE_URL + 'hospitals/' + id);
};

export const getSpecialities = () => {
  return axios.get(API_BASE_URL + 'specialities');
};

export const getCities = () => {
  return axios.get(API_BASE_URL + 'cities');
};

export const getHospitalDetails = async (hospitalId) => {
  try {
    const response = await axios.get(`/api/hospitals/${hospitalId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching hospital details:', error);
    throw new Error('Failed to fetch hospital details');
  }
};