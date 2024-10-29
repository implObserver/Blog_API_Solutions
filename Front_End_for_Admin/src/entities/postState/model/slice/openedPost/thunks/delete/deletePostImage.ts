import { DeleteService } from "@/entities/postState/api";

export const deletePostImage = async (folderName: FormData) => {
    try {
        DeleteService.deletePostImage(folderName);
    } catch (error) {
        console.log(error);
    }
}