import { getImageByCode } from "@/entities/postPreview/lib/helper/indexedDB/getPostImage";
import { savePostImage } from "@/entities/postPreview/lib/helper/indexedDB/savePostImage";
import { getPostImage } from "@/entities/postState/model/slice/openedPost/thunks/get/getPostImage";


export const handleExistingPostImages = async (post_id: number, model: Model<ModelVariant>) => {
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

export const uploadImage = async (post_id: number, model: Model<ModelVariant>) => {
    const blob = await getPostImage(model.imageUrl);
    const isRetry = blob === null;
    const image: ImageType = {
        code: model.imageUrl,
        blob,
        isRetry,
    };
    await savePostImage(post_id, image);
    return blob;
};