import { ReadService } from "@/entities/postPreview/api/api.get";

export const getLastModified = async (data: FormData) => {
    try {
        const resp = await ReadService.getLastModified(data);
        const response = resp.data.lastModified;
        console.log(resp)
        return response;
    } catch (error) {
        return null;
    }
}