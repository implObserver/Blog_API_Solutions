import { DeleteService } from "@/entities/postState/api/api.delete";

export const deletePostImage = async (folderName: string) => {
    try {
        DeleteService.deletePostImage(folderName);
    } catch (error) {
        console.log(error);
    }
}