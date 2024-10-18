import { savePostImage } from "@/entities/postPreview/lib/helper/indexedDB/savePostImage";

export const addPlaceholderImageToPost = async (postid: number, model: Model<ModelVariant>) => {
    const image: ImageType = {
        code: model.imageUrl,
        blob: null,
        isRetry: false,
    };
    await savePostImage(postid, image);
};