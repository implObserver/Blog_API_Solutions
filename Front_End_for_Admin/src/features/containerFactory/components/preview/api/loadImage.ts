import { ReadService } from "@/entities/user/api/api.get";

export const loadImage = async (imageUrl: string) => {
    try {
        console.log(imageUrl)
        const resp = await ReadService.getPostImage(imageUrl);
        const contentType = resp.headers['content-type']
        const blob = resp.data;
        console.log(resp)
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