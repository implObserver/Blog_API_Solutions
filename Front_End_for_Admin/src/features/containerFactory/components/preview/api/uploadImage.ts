import { ReadService } from "@/entities/user/api/api.get";
import { UpdateService } from "@/entities/user/api/api.post";

export const uploadImage = async (data: ImageUpdate) => {
    try {
        UpdateService.addImage(data);
    } catch (error) {
        console.log(error);
    }
}