import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
  responseType: 'json',
});

export const typedGet = async <T>(url: string, config?: AxiosRequestConfig) => {
  const response = await axiosInstance.get<T>(url, config);
  return response.data;
};

export const typedPost = async <T>(url: string, data: unknown, config?: AxiosRequestConfig) => {
  const response = await axiosInstance.post<T>(url, data, config);
  return response.data;
};
