import axios from "axios";
import { store } from "../model/store/Store";
import { logout, servicesActions } from "@/entities/user";
import { persistStore } from "redux-persist";
import { counterActions } from "@/entities/element";

const apiUrl = import.meta.env.VITE_SERVER_URL;

export const instance = axios.create({
    // к запросу будет приуепляться cookies
    withCredentials: true,
    baseURL: apiUrl,
    headers: {
        'Access-Control-Allow-Origin': apiUrl,
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
                    store.dispatch(servicesActions.reset())
                    console.error('ошибка авторизации');
                }
            }
        } else {
            console.error('An unexpected error occurred:', error);
        }

        return Promise.reject(error);
    }
);