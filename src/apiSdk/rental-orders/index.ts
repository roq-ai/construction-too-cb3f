import axios from 'axios';
import queryString from 'query-string';
import { RentalOrderInterface, RentalOrderGetQueryInterface } from 'interfaces/rental-order';
import { GetQueryInterface } from '../../interfaces';

export const getRentalOrders = async (query?: RentalOrderGetQueryInterface) => {
  const response = await axios.get(`/api/rental-orders${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createRentalOrder = async (rentalOrder: RentalOrderInterface) => {
  const response = await axios.post('/api/rental-orders', rentalOrder);
  return response.data;
};

export const updateRentalOrderById = async (id: string, rentalOrder: RentalOrderInterface) => {
  const response = await axios.put(`/api/rental-orders/${id}`, rentalOrder);
  return response.data;
};

export const getRentalOrderById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/rental-orders/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRentalOrderById = async (id: string) => {
  const response = await axios.delete(`/api/rental-orders/${id}`);
  return response.data;
};
