import axios from "axios";

let retryCount = 0;

export const instance = axios.create({
    // к запросу будет приуепляться cookies
    withCredentials: true,
    baseURL: "http://localhost:3000/",
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
    }
});

// Настройка axios-retry

// Переменная для отслеживания количества текущих попыток
let currentRetryCount = 0;

// Интерсептор ответа
instance.interceptors.response.use(
    (response) => {
        // Сбрасываем счетчик на успешных ответах
        currentRetryCount = 0;
        return response;
    },
    async (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                // Увеличиваем счетчик попыток при ошибках 401
                currentRetryCount++;

                if (currentRetryCount === 1) {
                    // Действие при первой повторной попытке
                    console.error('Попытка обновить acess token');
                    await instance.get("/api/user/refresh-acess-token");
                    // Здесь можете добавить логику для перенаправления пользователя на страницу логина или другое действие
                } else if (currentRetryCount === 2) {
                    // Действие при третьей повторной попытке
                    console.error('Попытка обновить refresh token');
                    await instance.get("/api/user/refresh-refresh-token");
                    // Здесь можете добавить логику, когда неудачные попытки превышают 3
                } else if (currentRetryCount === 3) {
                    console.error('ошибка авторизации');
                }
            }
        } else {
            // Если ошибка не связана с ответом сервера
            console.error('An unexpected error occurred:', error);
        }

        // Если ошибка - это 401, передаем ее дальше, чтобы axios-retry мог обработать повторные попытки
        return Promise.reject(error);
    }
);

// Пример использования axios с обработкой 401 ошибки
const fetchData = async () => {
    try {
        const response = await instance.get('/protected-resource');
        console.log('Data:', response.data);
    } catch (error) {
        // Дополнительная обработка ошибок, если не удалось выполнить запрос
        console.error('Request failed:', error.message);
    }
};