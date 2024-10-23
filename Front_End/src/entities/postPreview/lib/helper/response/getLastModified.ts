import { ReadService } from "@/entities/postPreview/api/api.get";

export const getLastModified = async (imageUrl: string) => {
    try {
        const resp = await ReadService.getLastModified(imageUrl);
        const response = resp.data.lastModified;
        console.log(resp)
        return response;
    } catch (error) {
        return null;
    }
}