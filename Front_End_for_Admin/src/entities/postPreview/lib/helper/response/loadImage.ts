import { GetService } from "@/entities/postPreview/api";


export const loadImage = async (data: FormData) => {
    try {
        const resp = await GetService.getPostImage(data);
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