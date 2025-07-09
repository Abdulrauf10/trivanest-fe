import { Filters } from '@/types/filter';
import apiCall from './apiCall';
import { APPOINTMENT_API } from '@/config/endpoint';

export const getAllAppointment = async (filter: Filters) => {
  const response = await apiCall.get(APPOINTMENT_API.APPOINTMENT, filter);
  return response.data;
};
