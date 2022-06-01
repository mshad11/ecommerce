//to fetch the category url
//import axiosinstance
import { AxiosInstance } from "../../utils/AxiosInstance";

export const getAllCategories = 
async() =>{
    //add the url
    const URI = '/categories'
    try{
        const response = await
        AxiosInstance.get(URI);
        return response
    }
    catch(error){
        console.log(error);
        throw error;
    }
}