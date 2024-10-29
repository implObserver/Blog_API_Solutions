import { getImageByCode, loadImage, savePostImage } from "@/entities/postPreview/lib";

export const handleExistingPostImages = async (post_id: number, model: Model<ModelVariant>) => {
    const image = await getImageByCode(post_id, model.imageUrl);
    if (image === null) {
        return await uploadImage(post_id, model);
    } else {
        if (image.blob === null && !image.isRetry) {
            return await uploadImage(post_id, model);;
        } else {
            return image.blob;
        }
    }
};

export const uploadImage = async (post_id: number, model: Model<ModelVariant>) => {
    const formData = new FormData();
    formData.append('postid', post_id.toString());
    formData.append('folderName', model.imageUrl);
    const blob = await loadImage(formData);
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