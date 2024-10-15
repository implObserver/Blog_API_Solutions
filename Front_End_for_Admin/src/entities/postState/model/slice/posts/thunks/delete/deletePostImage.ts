import { DeleteService } from "@/entities/user/api/api.delete";

export const deletePostImage = async (imageUrl: string) => {
    try {
        DeleteService.deletePostImage(imageUrl);
    } catch (error) {
        console.log(error);
    }
}