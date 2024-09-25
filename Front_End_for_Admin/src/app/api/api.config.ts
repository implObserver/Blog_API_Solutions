import axios from "axios";

export const instance = axios.create({
    // к запросу будет приуепляться cookies
    withCredentials: true,
    baseURL: "http://localhost:3000/",
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
    }
});

let currentRetryCount = 0;

instance.interceptors.response.use(
    (response) => {
        currentRetryCount = 0;
        return response;
    },
    async (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                currentRetryCount++;

                if (currentRetryCount === 1) {
                    console.error('Попытка обновить acess token');
                    await instance.get("/api/user/refresh-acess-token");
                } else if (currentRetryCount === 2) {
                    console.error('Попытка обновить refresh token');
                    await instance.get("/api/user/refresh-refresh-token");
                } else if (currentRetryCount === 3) {
                    console.error('ошибка авторизации');
                }
            }
        } else {
            console.error('An unexpected error occurred:', error);
        }

        return Promise.reject(error);
    }
);

const fetchData = async () => {
    try {
        const response = await instance.get('/protected-resource');
        console.log('Data:', response.data);
    } catch (error) {
        console.error('Request failed:', error.message);
    }
};