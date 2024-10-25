import { getUserID, instance } from '@/shared/lib';

export const GetService = {
    readProfile() {
        const userID = getUserID();
        return instance.get(`/api/user/:${userID}/profile/`);
    },
    readPostsOfuser() {
        const userID = getUserID();
        return instance.get(`/api/user/:${userID}/posts/`);
    },
    getAvatar() {
        const userID = getUserID();
        return instance.get(`/api/user/:${userID}/profile/avatar`, {
            responseType: 'blob',
        });
    },
}