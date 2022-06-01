//since we know tht we want to call the API_BASE_URL repeatedly.We want to make that as generic
//also.so we are doing this here

import axios from 'axios';
 import { API_BASE_URL } from '../config/Config';

 axios.defaults.headers.common['Content-Type'] ='application/json'//what type of data i will be sending from frontend to backend
 axios.defaults.headers.common['Accept'] ='application/json'//what type of data i will be recieving from bed to fed

  //to pass headers/verifying agents/it determines whwther api call is safe or not

 //everytime i do axios i need to pass base-url we will hv to import this base_url from config

 export const AxiosInstance = axios.create({baseURL: API_BASE_URL})    //allows to create a api call
 //it pases the baseurl when we import AxiosInstance