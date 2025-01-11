import axios from "axios";
import { API_URL } from "./apiUrl";

export const getRepositories = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};