import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface AxiosHelperProps {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  accessToken?: string;
}

const axiosHelper = async ({ url, method, data, accessToken }: AxiosHelperProps): Promise<any> => {
  const baseUrl = 'https://equran.id/api'; // Base URL 
    const config: AxiosRequestConfig = {
        method: method,
        url: `${baseUrl}${url}`,
        data: data || null,
  };

  try {
    const response: AxiosResponse = await axios(config);
    console.log(response, "RESPONSE FROM HELPER")
    return response.data;
  } catch (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Response Error:', error.response.data);
      console.error('Response Status:', error.response.status);
      console.error('Response Headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request Error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error Message:', error.message);
    }
    throw new Error(error.message);
  }
};

export default axiosHelper;