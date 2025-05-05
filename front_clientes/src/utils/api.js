import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your API base URL

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


const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

const getAllProducts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products`);
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
export { fetchData, createProduct, getAllProducts,createInvoice, getAllInvoices, getAllClients };
