"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const PROD_API_URL = import.meta.env.VITE_PROD_API_URL;
const DEV_API_URL = import.meta.env.VITE_DEV_API_URL;
const isDev = import.meta.env.VITE_ENVIRONMENT === "development";
const API_URL = isDev ? DEV_API_URL : PROD_API_URL;
class APIService {
    constructor() {
        this.axiosInstance = axios_1.default.create({
            baseURL: API_URL,
            headers: {
                "Content-Type": "application/json",
            }
        });
        this.axiosInstance.interceptors.response.use((response) => {
            return response.data;
        }, (error) => {
            return Promise.reject(error);
        });
    }
    getInstance() {
        return this.axiosInstance;
    }
}
exports.default = APIService;
//# sourceMappingURL=APIService.service.js.map