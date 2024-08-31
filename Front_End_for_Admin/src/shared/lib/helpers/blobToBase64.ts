export function fileToBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            // Получаем результат чтения в формате Base64
            resolve(reader.result);
        };

        reader.onerror = () => {
            reject(new Error('Ошибка чтения файла'));
        };

        // Читаем файл как Data URL (Base64)
        reader.readAsDataURL(file);
    });
}

export function base64ToFile(base64String, fileName) {
    // Разделяем Base64 строку на метаданные и данные
    const [metadata, base64] = base64String.split(',');

    // Проверяем наличие MIME-типа и извлекаем его
    const mimeMatch = metadata.match(/data:(.*);base64/);
    const mimeType = mimeMatch ? mimeMatch[1] : 'application/octet-stream';

    // Декодируем Base64 строку и создаем массив байтов
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    // Создаем Blob и затем объект File из него
    const blob = new Blob([byteArray], { type: mimeType });
    return new File([blob], fileName, { type: mimeType });
}