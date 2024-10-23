import { ReadService } from "@/entities/postPreview/api/api.get";

export const loadImage = async (imageUrl: string) => {
    try {
        const resp = await ReadService.getPostImage(imageUrl);
        const contentType = resp.headers['content-type']
        const blob = resp.data;
        if (contentType.startsWith('image/')) {
            const lastModified = resp.headers['last-modified'];
            const file = new File([blob], 'avatar', { type: contentType, lastModified });
            return file;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}