import axios from 'axios';
//import env from '../../Config';
const env = {
    API_URL: 'https://3050-idx-pclfactgit-1745446889691.cluster-f4iwdviaqvc2ct6pgytzw4xqy4.cloudworkstations.dev/'
}

const API_BASE_URL = env.API_URL || 'http://localhost:3050'; // Replace with your API base URL
const apiUrl= env.API_URL;

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

const fetchGeneric = async (endpoint) => {
  console.log(fetch(`${apiUrl}${endpoint}`));
  const response = await fetch(`${apiUrl}${endpoint}`);
  const data = await response.json();
  return data;
};

const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

const getAllGeneric = async (endpoint) => {
    try {
      const response = await axios.get(`${API_BASE_URL}${endpoint}`);
      return response.data;
    } catch (error) {
      console.error('Error getting products:', error);
      throw error;
    }
  };
  const createInvoice = async (invoiceData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/invoices`, invoiceData);
      return response.data;
    } catch (error) {
      console.error('Error creating invoice:', error);
      throw error;
    }
  };
  const getAllInvoices = async () => {
    const response = await axios.get(`${API_BASE_URL}/invoices`);
    return response.data;
  };
  
  const getAllClients = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/clients`);
      return response.data;
    } catch (error) {
      console.error('Error getting clients:', error);
      throw error;
    }
  };
export { fetchData, createProduct, getAllGeneric, createInvoice, getAllInvoices, getAllClients, fetchGeneric };
