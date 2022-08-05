import axios from 'axios';

const apiService = {
  get(url: string, config?: any) {
    return axios.get(url, config);
  },
};

export { apiService };
