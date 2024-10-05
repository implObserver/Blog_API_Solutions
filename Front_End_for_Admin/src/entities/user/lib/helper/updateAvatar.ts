import { UpdateService } from "../../api/api.put";

export const updateAvatar = async (avatar: File) => {
    try {
        const resp = await UpdateService.updateAvatar(avatar);
        const user = resp.data.user;
        return user;
    } catch (error) {
        return false;
    }
}