import { dbPromise } from "@/app/model/store/indexedDB";
export const getPostImages = async (post_id: number): Promise<Array<ImageType> | null> => {
    const db = await dbPromise;
    const postRecord = await db.get('posts', post_id);
    if (postRecord) {
        console.log('Данные получены:', postRecord);
        return postRecord.images;
    } else {
        console.log('Данные не найдены для post_id:', post_id);
        return null;
    }
};

export const getImageByCode = async (post_id: number, code: string): Promise<ImageType | null> => {
    const postImages = await getPostImages(post_id);

    if (postImages) {
        const targetImage = postImages.find(item => item.code === code);
        if (targetImage) {
            console.log('Blob получен для image_code:', code);
            return targetImage;
        }
    }

    console.log('Не найден Blob для image_code:', code);
    return null;
};