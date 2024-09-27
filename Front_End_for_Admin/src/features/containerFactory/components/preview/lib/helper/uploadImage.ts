import { getImageByCode } from "@/entities/postPreview/lib/helper/getPostImageFromIDB";
import { addPostImages } from "@/entities/postPreview/lib/helper/loadImageToIDB";
import { getPostImage } from "@/entities/user";

export const handleExistingPostImages = async (post_id: number, model: ModelType<ModelSubtype>) => {
    const image = await getImageByCode(post_id, model.imageUrl);
    const shouldUpload = image.blob === null && !image.isRetry;
    return shouldUpload
        ? await uploadImage(post_id, model)
        : image.blob;
};

const uploadImage = async (post_id: number, model: ModelType<ModelSubtype>) => {
    const blob = await getPostImage(model.imageUrl);
    const isRetry = blob === null;
    const image: ImageType = {
        code: model.imageUrl,
        blob,
        isRetry,
    };
    await addPostImages(post_id, image);
    return blob;
};