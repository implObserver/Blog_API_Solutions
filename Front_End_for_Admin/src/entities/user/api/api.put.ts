import { instance } from "@/app/api/api.config"
import Cookies from 'js-cookie'
const id = Cookies.get('user_id');


export const UpdateService = {
    updatePost(post: Post) {
        const encoder = new TextEncoder();
        const byteSize = encoder.encode(JSON.stringify(post)).length;
        console.log(byteSize)
        return instance.put(`/api/user/:${id}/posts/update`, post)
    }
}