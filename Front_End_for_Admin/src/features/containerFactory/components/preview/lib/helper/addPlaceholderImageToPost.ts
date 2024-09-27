import { addPostImages } from "@/entities/postPreview/lib/helper/loadImageToIDB";

export const addPlaceholderImageToPost = async (post_id: number, model: ModelType<ModelSubtype>) => {
    const image: ImageType = {
        code: model.imageUrl,
        blob: null,
        isRetry: false,
    };
    await addPostImages(post_id, image);
    return image.blob;
};