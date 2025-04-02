import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const registerCustomer = async (customerData) => {
  const response = await api.post('/customers/register', customerData);
  return response.data;
};

export const loginCustomer = async (credentials) => {
  const response = await api.post('/customers/login', credentials);
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('role', 'customer');
  return response.data;
};

export const registerPandit = async (panditData) => {
  const response = await api.post('/pandits/register', panditData);
  return response.data;
};

export const loginPandit = async (credentials) => {
  const response = await api.post('/pandits/login', credentials);
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('role', 'pandit');
  return response.data;
};

export const getPandits = async () => {
  const response = await api.get('/pandits');
  return response.data;
};

export const createBooking = async (bookingData) => {
  const token = localStorage.getItem('token');
  const response = await api.post('/bookings', bookingData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const getPanditBookings = async () => {
  const token = localStorage.getItem('token');
  const response = await api.get('/bookings/my-bookings', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};