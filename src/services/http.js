import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.baseURL = "http://localhost:3001";

//This will execute when got response with an error
axios.interceptors.response.use((response) => {
    // Do something with response data
    return response;
}, (error) => {

    // Do something with response error
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        // logger.log(error);
        toast.error("An unexpected error occurred with connection.");
    }else{
        switch (error.response.status) {
            case 401 :  toast.error("You are not authorized!");
                break;
            case 400 :  toast.error("Wrong API path!");
                break;
            case 404 :  toast.error("Page not exists!");
                break;
            default:
                toast.error("An error occurred.");
        }

    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    patch: axios.patch,
    put: axios.put,
    delete: axios.delete,
};
