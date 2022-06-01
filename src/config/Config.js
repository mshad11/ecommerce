const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
//process.env is used to import the env values in env file
console.log(API_BASE_URL);

if(!API_BASE_URL){
    throw new Error(".env is missing")
}
export{API_BASE_URL};

//since we are bringing the value of API_URL from another file(.env)
// we dont use export default instead we use export{API_BASE_URL} for default