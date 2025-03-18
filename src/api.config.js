import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Client-Token": import.meta.env.VITE_API_KEY
    },
});

export const getData = async (endpoint) => {
    try {
        const response = await api.get(endpoint); 

        if (response.status != 200) {
            return {
                statusCode: response.status,
                message: response.data.message
            };
        }

        const { data } = response;

        return {
            statusCode: 200,
            ...data
        }
    } catch (error) {
        if (error.status == 404) {
            return {
                statusCode: 404,
                message: 'Article was not found.'
            };
        }

        return {
            statusCode: 500,
            message: 'Internal server error'
        };
    }
};

export default api;