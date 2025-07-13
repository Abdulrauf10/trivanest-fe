import { Filters } from '@/types/filter';
import apiCall from './apiCall';
import { APPOINTMENT_API } from '@/config/endpoint';
import { AppointmentPost } from '@/types/appointment';

export const getAllAppointment = async (filter: Filters) => {
  const response = await apiCall.get(APPOINTMENT_API.APPOINTMENT, filter);
  return response.data;
};

export const addAppointment = async (payload: AppointmentPost) => {
  const response = await apiCall.post(APPOINTMENT_API.APPOINTMENT, payload);
  return response.data;
};

export const editAppointment = async (id: string, payload: AppointmentPost) => {
  const response = await apiCall.put(APPOINTMENT_API.APPOINTMENT, id, payload);
  return response.data;
};
