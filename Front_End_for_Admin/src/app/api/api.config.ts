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

        // Проверка, что ошибка именно из-за невалидного accessToken
        if (error.response && error.response.status === 401 && !originalRequest._isRetry) {
            try {
                originalRequest._isRetry = true;
                // Запрос на обновление токена
                const resp = await instance.get("/api/user/refresh-acess-token");

                // Переотправляем запрос с обновленным токеном, так как токены автоматически сохраняются в HttpOnly cookie
                return instance(originalRequest);
            } catch (refreshError) {
                console.log("AUTH ERROR: Unable to refresh token");
                // Здесь вы можете обработать ситуацию по своему усмотрению
                // Например, перенаправить на страницу входа или показать сообщение об ошибке
            }
        }
        // На случай, если возникла другая ошибка (не связанная с авторизацией)
        // пробросим эту ошибку
        throw error;
    }
);