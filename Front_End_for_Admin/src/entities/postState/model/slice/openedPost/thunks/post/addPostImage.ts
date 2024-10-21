import { PostService } from "@/entities/postState/api";

export const addPostImage = async (data: ImageUpdate) => {
    try {
        PostService.addImage(data);
    } catch (error) {
        console.log(error);
    }
}