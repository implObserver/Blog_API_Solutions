import { useIndexedDb } from "@/shared/lib";

const dbPromise = useIndexedDb();

export const savePostImage = async (post_id: number, image: ImageType): Promise<void> => {
    const db = await dbPromise;
    console.log(image)
    const postRecord = await db.get('posts', post_id) || { post_id, images: [] };

    const imageIndex = postRecord.images.findIndex((item: { code: string; }) => item.code === image.code);
    if (imageIndex !== -1) {
        postRecord.images[imageIndex].blob = image.blob;
        postRecord.images[imageIndex].isRetry = image.isRetry;
        postRecord.images[imageIndex].version = image.version;
        console.log('Изображение успешно обновлено:', { post_id, image });
    } else {
        console.log(image)
        postRecord.images.push(image);
        console.log('Изображение успешно добавлено:', { post_id, image });
    }
    await db.put('posts', postRecord);
};