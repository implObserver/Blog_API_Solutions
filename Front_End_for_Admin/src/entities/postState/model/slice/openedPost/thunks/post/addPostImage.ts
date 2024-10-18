import { PostService } from "@/entities/user/api/api.post";

export const addPostImage = async (data: ImageUpdate) => {
    try {
        PostService.addImage(data);
    } catch (error) {
        console.log(error);
    }
}