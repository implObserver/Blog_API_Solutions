import { getUserID, instance } from "@/shared/lib";

export const PostService = {
    addPost(dataPost: PostForm) {
        const userID = getUserID();
        return instance.post(`/api/user/:${userID}/posts/add`, dataPost)
    },
    addImage(data: ImageUpdate) {
        const userID = getUserID();
        const nameFolder = data.folderName;
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        const file = new FormData();
        file.append('file', data.file);
        return instance.post(`/api/user/:${userID}/posts/image/${nameFolder}/update`, file, config)
    },
}