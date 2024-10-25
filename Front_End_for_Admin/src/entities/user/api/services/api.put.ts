import { getUserID, instance } from '@/shared/lib';

const userID = getUserID();

export const PutService = {
    updateAvatar(avatar: File) {
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
        return instance.put(`/api/user/${userID}/profile/update/`, profile)
    },
}