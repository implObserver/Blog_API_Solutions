import { getUserID, instance } from '@/shared/lib';

const userID = getUserID();

export const GetService = {
    readProfile() {
        return instance.get(`/api/user/:${userID}/profile/`);
    },
    readPostsOfuser() {
        return instance.get(`/api/user/:${userID}/posts/`);
    },
    getAvatar() {
        return instance.get(`/api/user/:${userID}/profile/avatar`, {
            responseType: 'blob',
        });
    },
}