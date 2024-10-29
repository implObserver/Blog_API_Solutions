import { getUserID, instance } from "@/shared/lib";

export const PostService = {
    addPost(dataPost: PostForm) {
        const userID = getUserID();
        return instance.post(`/api/user/${userID}/posts/add`, dataPost)
    },
    addImage(data: FormData) {
        const userID = getUserID();
        const nameFolder = data.get('folderName');
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        return instance.post(`/api/user/${userID}/posts/image/${nameFolder}/update`, data, config)
    },
}