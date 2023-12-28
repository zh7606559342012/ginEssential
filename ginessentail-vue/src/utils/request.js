import axios from 'axios';
import storageService from '../service/storageService';

// const baseURL = process.env.VUE_APP_BASE_URL;
// console.log('Base URL:', baseURL);

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // baseURL,
  timeout: 1000 * 5,
  headers: { Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}` },
});

export default service;
