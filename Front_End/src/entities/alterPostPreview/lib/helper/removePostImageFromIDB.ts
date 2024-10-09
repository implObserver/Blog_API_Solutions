import { dbPromise } from "@/app/model/store/indexedDB";


export const removePostImage = async (post_id: number, code: string): Promise<void> => {
    const db = await dbPromise;

    const existingPost = await db.get('posts', post_id);

    if (existingPost) {
        const imageIndex = existingPost.images.findIndex(item => item.code === code);

        if (imageIndex !== -1) {
            existingPost.images.splice(imageIndex, 1);
            console.log('Изображение успешно удалено:', { post_id, code });
            await db.put('posts', existingPost);
        } else {
            console.log('Изображение не найдено для удаления:', { post_id, code });
        }
    } else {
        console.log('Пост не найден для post_id:', post_id);
    }
};