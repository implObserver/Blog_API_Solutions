import { GetService } from "../../api/services/api.get";

export const getAvatar = async () => {
    try {
        const resp = await GetService.getAvatar();
        const contentType = resp.headers['content-type']
        const data = resp.data;
        const file = new File([data], 'avatar', { type: contentType });
        return file;
    } catch (error) {
        return null;
    }
}