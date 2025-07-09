import axios, { AxiosInstance, AxiosHeaders } from 'axios';
import { cookies } from 'next/headers';

const BASE_API_URL = process.env.BASE_URL;

export const apiRequest: AxiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Accept: 'Application/json',
  },
});

async function getCookieToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  return token;
}

apiRequest.interceptors.request.use(
  async (request) => {
    const token = await getCookieToken();
    if (token) {
      (request.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
    }

    (request.headers as AxiosHeaders).set('accept', 'application/json');

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const apiCall = {
  get(apiUrl: string, params?: any) {
    return apiRequest.get(apiUrl, params);
  },
  post(apiUrl: string, payload?: any) {
    return apiRequest.post(apiUrl, payload);
  },
  put(apiUrl: string, params?: any, payload?: any) {
    return apiRequest.put(apiUrl, params, payload);
  },
  delete(apiUrl: string, params?: any) {
    return apiRequest.delete(apiUrl, params);
  },
};

export default apiCall;
