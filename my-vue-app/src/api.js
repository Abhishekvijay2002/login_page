import axios from 'axios';
const API_URL = 'http://localhost:5000';
export const registerUser = async (userData) => axios.post(`${API_URL}/register`, userData, { withCredentials: true });
export const loginUser = async (userData) => axios.post(`${API_URL}/login`, userData, { withCredentials: true });
export const fetchDashboard = async () => axios.get(`${API_URL}/dashboard`, { withCredentials: true });
export const logoutUser = async () => axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
