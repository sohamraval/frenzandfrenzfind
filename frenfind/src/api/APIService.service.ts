import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const PROD_API_URL = import.meta.env.VITE_PROD_API_URL;
const DEV_API_URL = import.meta.env.VITE_DEV_API_URL;
const isDev = import.meta.env.VITE_ENVIRONMENT === "development";
const API_URL = isDev ? DEV_API_URL : PROD_API_URL;

class APIService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: API_URL,
            headers: {
                "Content-Type": "application/json",
            }
        });

        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response.data;
            },
            (error: AxiosError) => {
                return Promise.reject(error);
            }
        );
    }
    
    public getInstance(): AxiosInstance {
        return this.axiosInstance;
    }
}

export default APIService;