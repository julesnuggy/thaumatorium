import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001'
})

export const productsUrl = '/products';

export const getProducts = async () => client.get(productsUrl).then(res => res.data);