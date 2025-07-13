import { Filters } from '@/types/filter';
import apiCall from './apiCall';
import { DOCTOR_API } from '@/config/endpoint';

export const getAllDoctor = async (filter: Filters) => {
  const response = await apiCall.get(DOCTOR_API.DOCTOR, filter);
  return response.data;
};

export const getDoctorById = async (id: string) => {
  const response = await apiCall.get(DOCTOR_API.DOCTOR, id);
  return response.data;
};
