import { ReadService } from "@/entities/postPreview/api/api.get";

export const loadImage = async (data: FormData) => {
    try {
        const resp = await ReadService.getPostImage(data);
        const contentType = resp.headers['content-type']
        const blob = resp.data;
        if (contentType.startsWith('image/')) {
            const lastModified = resp.headers['last-modified'];
            const file = new File([blob], 'image', { type: contentType, lastModified });
            return file;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}