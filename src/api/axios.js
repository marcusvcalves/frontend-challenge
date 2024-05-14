import axios from 'axios';

const BASE_URL = 'https://api.homologation.cliqdrive.com.br';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

export default apiClient;
