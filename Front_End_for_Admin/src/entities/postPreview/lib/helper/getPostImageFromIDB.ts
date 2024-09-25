import { dbPromise } from "@/app/model/store/indexedDB";
export const getPostImages = async (post_id: number): Promise<Array<ImageType> | null> => {
    const db = await dbPromise;
    const post = await db.get('posts', post_id);
    if (post) {
        console.log('Данные получены:', post);
        return post.images;
    } else {
        console.log('Данные не найдены для post_id:', post_id);
        return null;
    }
};

export const getImageByCode = async (post_id: number, code: string): Promise<ImageType | null> => {
    const postImages = await getPostImages(post_id);

    if (postImages) {
        const imageObj = postImages.find(item => item.code === code);
        if (imageObj) {
            console.log('Blob получен для image_code:', code);
            return imageObj;
        }
    }

    console.log('Не найден Blob для image_code:', code);
    return null;
};