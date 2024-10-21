import { GetService } from "@/entities/postState/api";

export const getPostImage = async (imageUrl: string) => {
    try {
        const resp = await GetService.getPostImage(imageUrl);
        const contentType = resp.headers['content-type']
        const blob = resp.data;
        
        if (contentType.startsWith('image/')) {
            return blob;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error)
        return null;
    }
}