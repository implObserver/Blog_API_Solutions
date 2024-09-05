import { DeleteService } from "@/entities/user/api/api.delete";
import { ReadService } from "@/entities/user/api/api.get";

export const deleteImage = async (imageUrl: string) => {
    try {
        DeleteService.deletePostImage(imageUrl);
    } catch (error) {
        console.log(error);
    }
}