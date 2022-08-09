import axios from 'axios';

const apiService = {
  get(url: string, config?: any) {
    return axios.get(url, config);
  },

  post(url: string, data: any, config: any) {
    return axios.post(url, data, config);
  },
};

export { apiService };
