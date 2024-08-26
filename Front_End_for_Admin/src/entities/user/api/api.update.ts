import { instance } from "@/app/api/api.config"

export const UpdateService = {
    updateAvatar(updateData: UpdateData) {
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        const file = new FormData();
        file.append('file', updateData.avatar);
        const user = updateData.user;

        let data = {
            data: file,
        }

        return instance.post(`/api/user/:${user.id}/profile/update/avatar`, file, config)
    },
    updateProfile(data: UpdateData) {
        const newData = data.profile;
        const user = data.user;
        return instance.post(`/api/user/:${user.id}/profile/update/`, { newData })
    },
}