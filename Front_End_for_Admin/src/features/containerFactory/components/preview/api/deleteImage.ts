import { DeleteService } from "@/entities/user/api/api.delete";

export const deleteImage = async (imageUrl: string) => {
    try {
        DeleteService.deletePostImage(imageUrl);
    } catch (error) {
        console.log(error);
    }
}