import { instance } from "@/app/api/api.config"

export const ReadService = {
    readProfile(user: User) {
        return instance.get(`/api/user/:${user.id}/profile/`);
    },
    readPostsOfuser(user: User) {
        return instance.get(`/api/user/:${user.id}/posts/`);
    },
}