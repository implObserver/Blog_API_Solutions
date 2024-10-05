import { ReadService } from "../../api/api.get";

export const getAvatar = async () => {
    try {
        const resp = await ReadService.getAvatar();
        const contentType = resp.headers['content-type']
        const data = resp.data;
        const file = new File([data], 'avatar', { type: contentType });
        return file;
    } catch (error) {
        return null;
    }
}