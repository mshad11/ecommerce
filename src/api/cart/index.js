import { AxiosInstance } from "../../utils/AxiosInstance";
//to get cart url
export const getAllCarts = async () =>{
    const URI = '/carts'
    try{
        const response = await
        AxiosInstance.get(URI)
        return response
    }
    catch(error){
        console.log(error);
        throw error;
    }
}