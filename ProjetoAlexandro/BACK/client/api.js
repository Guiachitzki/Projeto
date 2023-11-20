import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getCardapio = () => axios.get(`${API_URL}/cardapio`);
export const createItem = (data) => axios.post(`${API_URL}/cardapio`, data);
export const updateItem = (id, data) => axios.put(`${API_URL}/cardapio/${id}`, data);
export const deleteItem = (id) => axios.delete(`${API_URL}/cardapio/${id}`);