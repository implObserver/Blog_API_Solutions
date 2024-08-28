import { useLocalStorage } from "@/shared/lib";
import axios from "axios";
import Cookies from 'js-cookie'

export const instance = axios.create({
    // к запросу будет приуепляться cookies
    withCredentials: true,
    baseURL: "http://localhost:3000/",
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
    }
});

// создаем перехватчик запросов
// который к каждому запросу добавляет accessToken из localStorage
instance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token');
        config.headers.Authorization = token;
        return config
    }
)


// создаем перехватчик ответов
// который в случае невалидного accessToken попытается его обновить
// и переотправить запрос с обновленным accessToken
instance.interceptors.response.use(
    // в случае валидного accessToken ничего не делаем:
    (config) => {
        return config;
    },
    // в случае просроченного accessToken пытаемся его обновить:
    async (error) => {
        // предотвращаем зацикленный запрос, добавляя свойство _isRetry 
        const originalRequest = { ...error.config };
        originalRequest._isRetry = true;
        if (
            // проверим, что ошибка именно из-за невалидного accessToken
            error.response.status === 401 &&
            // проверим, что запрос не повторный
            error.config &&
            !error.config._isRetry
        ) {
            try {
                // запрос на обновление токенов
                const resp = await instance.get("/api/refresh");
                // сохраняем новый accessToken в localStorage
                localStorage.setItem("post_constructor_token", resp.data.accessToken);
                // переотправляем запрос с обновленным accessToken
                return instance.request(originalRequest);
            } catch (error) {
                console.log("AUTH ERROR");
            }
        }
        // на случай, если возникла другая ошибка (не связанная с авторизацией)
        // пробросим эту ошибку 
        throw error;
    }
);