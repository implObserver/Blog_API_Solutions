import { getImageByCode, loadImage, savePostImage } from "@/entities/postPreview/lib";
import { getPostImage } from "@/entities/postState";

export const handleExistingPostImages = async (post_id: number, model: Model<ModelVariant>) => {
    const image = await getImageByCode(post_id, model.imageUrl);
    if (image === null) {
        return await loadImage(model.imageUrl);
    } else {
        if (image.blob === null && !image.isRetry) {
            return await loadImage(model.imageUrl);
        } else {
            return image.blob;
        }
    }
};

export const uploadImage = async (post_id: number, model: Model<ModelVariant>) => {
    const blob = await getPostImage(model.imageUrl);
    const isRetry = blob === null;
    const image: ImageType = {
        blob,
        code: model.imageUrl,
        version: blob.lastModified,
        isRetry,
    };
    await savePostImage(post_id, image);
    return blob;
};