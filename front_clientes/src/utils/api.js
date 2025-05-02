import axios from 'axios';

const fetchData = async (url, method = 'GET', body = null) => {
  try {
    const config = {
      method,
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      config.data = body;
    }

    const response = await axios(config);
    return response.data;

  } catch (error) {
    console.error('Failed to fetch or process data:', error);
    throw error;
  }
};

export default fetchData;
