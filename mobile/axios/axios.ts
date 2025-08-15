import axios from 'axios';


const SERVER_IP = '192.168.0.110';
const SERVER_PORT = '5000';

const SERVER_IP_PC = 'http://localhost:';
const BASE_URL = `http://${SERVER_IP_PC}:${SERVER_PORT}`;

const api = axios.create({
    baseURL: "http://192.168.0.110:5000",
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use(
    (config) => {
        console.log(`🌐 API Request: ${config.method?.toUpperCase()} ${config.url}`);
        console.log(`🔗 Full URL: ${config.baseURL}${config.url}`);
        return config;
    },
    (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log(`✅ API Response: ${response.status} ${response.config.url}`);
        return response;
    },
    (error) => {
        console.error('❌ Response Error:', {
            status: error.response?.status,
            message: error.message,
            url: error.config?.url,
            data: error.response?.data
        });
        return Promise.reject(error);
    }
);

export default api;