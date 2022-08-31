import axios from 'axios'
import { config } from '../../config';

// Get Records

const getRecords = async () => {

  const response = await axios.get(`${config.api.url}/records`);

  return response.data;
}

const recordsService = {
  getRecords,
}

export default recordsService;