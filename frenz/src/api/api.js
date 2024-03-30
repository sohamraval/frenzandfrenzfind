import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
console.log("baseURL", baseURL);
export const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
