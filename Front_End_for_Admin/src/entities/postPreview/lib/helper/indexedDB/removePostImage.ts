import { useIndexedDb } from "@/shared/lib";

const dbPromise = useIndexedDb();

export const removePostImage = async (post_id: number, code: string): Promise<void> => {
    const db = await dbPromise;

    const postRecord = await db.get('posts', post_id);

    if (postRecord) {
        const imageIndex = postRecord.images.findIndex(item => item.code === code);
        if (imageIndex !== -1) {
            postRecord.images.splice(imageIndex, 1);
            console.log('Изображение успешно удалено:', { post_id, code });
            await db.put('posts', postRecord);
        } else {
            console.log('Изображение не найдено для удаления:', { post_id, code });
        }
    } else {
        console.log('Пост не найден для post_id:', post_id);
    }
};