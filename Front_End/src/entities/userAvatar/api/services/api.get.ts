import { getUserID, instance } from "@/shared/lib";

const userID = getUserID();

export const GetService = {
    getAvatar() {
        return instance.get(`/api/user/:${userID}/profile/avatar`, {
            responseType: 'blob',
        });
    },
}