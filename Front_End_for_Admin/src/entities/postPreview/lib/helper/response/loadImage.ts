import { GetService } from "@/entities/postPreview/api";

export const loadImage = async (imageUrl: string) => {
    try {
        const resp = await GetService.getPostImage(imageUrl);
        const contentType = resp.headers['content-type']
        const blob = resp.data;
        if (contentType.startsWith('image/')) {
            const file = new File([blob], 'avatar', { type: contentType });
            return file;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}