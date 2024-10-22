import { getImageByCode } from "@/entities/postPreview/lib/helper/getPostImageFromIDB";
import { loadImage } from "@/entities/postPreview/lib/helper/loadImage";
import { addPostImages } from "@/entities/postPreview/lib/helper/loadImageToIDB";
import { getPostImage } from "@/entities/postState/model/slice/posts/thunks/get/getPostImage";


export const handleExistingPostImages = async (post_id: number, model: Model<ModelVariant>) => {
    const image = await getImageByCode(post_id, model.imageUrl);
    if (image === null) {
        return await uploadImage(post_id, model);
    } else {
        if (image.blob === null && !image.isRetry) {
            return await uploadImage(post_id, model);
        } else {
            console.log(model.imageUrl, image.code)
            return image.blob;
        }
    }
};

export const uploadImage = async (post_id: number, model: Model<ModelVariant>) => {
    const blob = await loadImage(model.imageUrl);
    const isRetry = blob === null;
    const image: ImageType = {
        code: model.imageUrl,
        blob,
        isRetry,
    };
    await addPostImages(post_id, image);
    return blob;
};