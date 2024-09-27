import { getImageByCode } from "@/entities/postPreview/lib/helper/getPostImageFromIDB";
import { addPostImages } from "@/entities/postPreview/lib/helper/loadImageToIDB";
import { getPostImage } from "@/entities/user";

export const handleExistingPostImages = async (post_id: number, model: ModelType<ModelSubtype>) => {
    const image = await getImageByCode(post_id, model.imageUrl);
    if (image === null) {
        return await uploadImage(post_id, model);
    } else {
        if (image.blob === null && !image.isRetry) {
            return await uploadImage(post_id, model);
        } else {
            return image.blob;
        }
    }
};

export const uploadImage = async (post_id: number, model: ModelType<ModelSubtype>) => {
    const blob = await getPostImage(model.imageUrl);
    console.log('www')
    const isRetry = blob === null;
    const image: ImageType = {
        code: model.imageUrl,
        blob,
        isRetry,
    };
    await addPostImages(post_id, image);
    return blob;
};