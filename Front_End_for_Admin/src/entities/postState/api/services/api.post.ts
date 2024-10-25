import { getUserID, instance } from "@/shared/lib";

const userID = getUserID();

export const PostService = {
    addPost(dataPost: PostForm) {
        return instance.post(`/api/user/:${userID}/posts/add`, dataPost)
    },
    addImage(data: ImageUpdate) {
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