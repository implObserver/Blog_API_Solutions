import { useIndexedDb } from "@/shared/lib";

const dbPromise = useIndexedDb();
export const addPostImages = async (post_id: number, image: ImageType): Promise<void> => {
    const db = await dbPromise;

    const existingPost = await db.get('posts', post_id) || { post_id, images: [] };
    const existingImageIndex = existingPost.images.findIndex(item => item.code === image.code);
    if (existingImageIndex !== -1) {
        existingPost.images[existingImageIndex].blob = image.blob;
        existingPost.images[existingImageIndex].isRetry = image.isRetry;
        console.log('Изображение успешно обновлено:', { post_id, image });
    } else {
        existingPost.images.push(image);
        console.log('Изображение успешно добавлено:', { post_id, image });
    }
    await db.put('posts', existingPost);
};