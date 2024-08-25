import { instance } from "@/app/api/api.config"

export const UpdateService = {
    updateAvatar(file: File) {
        return instance.post("/api/user/:{id}/profile/upload/avatar", { file })
    },
    deleteAvatar(file: File) {
        return instance.post("/api/user/:{id}/profile/delete/avatar", { file })
    },
    updateProfile(data: UpdateData) {
        const newData = data.profile;
        const user = data.user;
        return instance.post(`/api/user/:${user.id}/profile/update/`, { newData })
    },
}