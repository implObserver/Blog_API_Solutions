export const compressImage = (blob: Blob, maxWidth: number = 1920, maxHeight: number = 1080): Promise<File> => {
    return new Promise((resolve, reject) => {
        // Проверка на допустимые форматы изображений
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']; // Убрали SVG

        // Если тип изображения не поддерживается, отклоняем промис
        if (!allowedTypes.includes(blob.type)) {
            const extension = getFileExtension(blob.type); // Получаем расширение по типу
            return resolve(new File([blob], `compressed_image${extension}`, { type: blob.type }));
        }

        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    let { width, height } = img;

                    // Поддержка пропорционального изменения размеров
                    if (width > maxWidth) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    }
                    if (height > maxHeight) {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }

                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    if (!ctx) {
                        return reject(new Error('Не удалось получить контекст 2D'));
                    }

                    ctx.drawImage(img, 0, 0, width, height);
                    canvas.toBlob(
                        (compressedBlob) => {
                            if (compressedBlob) {
                                const extension = getFileExtension(blob.type); // Получаем расширение по типу
                                const file = new File([blob], `compressed_image${extension}`, { type: blob.type });
                                resolve(file);
                            } else {
                                reject(new Error('Не удалось создать Blob'));
                            }
                        },
                        'image/jpeg',
                        0.9 // качество 90%, чтобы сохранить высокое качество
                    );
                };
                img.onerror = (error) => reject(error);
            } else {
                reject(new Error('Не удалось прочитать данные изображения'));
            }
        };
        reader.onerror = (error) => reject(error);
    });
};

const getFileExtension = (mimeType) => {
    switch (mimeType) {
        case 'image/jpeg':
            return '.jpg';
        case 'image/png':
            return '.png';
        case 'image/gif':
            return '.gif';
        case 'image/webp':
            return '.webp';
        case 'image/bmp':
            return '.bmp';
        case 'image/tiff':
            return '.tiff';
        case 'image/svg+xml':
            return '.svg';
        case 'image/vnd.microsoft.icon':
            return '.ico';
        default:
            return mimeType; // Возвращаем исходный mimeType, если не найдено соответствующее расширение
    }
};