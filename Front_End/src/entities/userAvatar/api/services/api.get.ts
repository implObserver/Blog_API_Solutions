import { getUserID, instance } from "@/shared/lib";

export const GetService = {
    getAvatar() {
        const userID = getUserID();
        return instance.get(`/api/user/:${userID}/profile/avatar`, {
            responseType: 'blob',
        });
    },
}