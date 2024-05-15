import axios from 'axios';

const BASE_URL = 'https://api.homologation.cliqdrive.com.br';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers:{
    'Content-Type': 'application/json',
    Accept: 'application/json;version=v1_web',
  }
});

export default apiClient;
