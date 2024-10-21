import { PutService } from "../../api/services/api.put";

export const updateAvatar = async (avatar: File) => {
    try {
        const resp = await PutService.updateAvatar(avatar);
        const user = resp.data.user;
        return user;
    } catch (error) {
        return false;
    }
}