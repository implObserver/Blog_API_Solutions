import { getUserID, instance } from '@/shared/lib';

export const PutService = {
    updateAvatar(avatar: File) {
        const userID = getUserID();
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }

        const file = new FormData();
        file.append('file', avatar);

        return instance.put(`/api/user/${userID}/profile/update/avatar`, file, config)
    },
    updateProfile(profile: ProfileForm) {
        const userID = getUserID();
        return instance.put(`/api/user/${userID}/profile/update/`, profile)
    },
}