import { useLocalStorage } from "@/shared/lib";
import { saveToken } from "../token/saveToken";

export const saveUser = (fullUser: UserWithToken) => {
    const user: User = {
        id: fullUser.id,
        name: fullUser.name,
    }
    saveToken(fullUser.token);
    const { setItem } = useLocalStorage('post_constructor_user');
    setItem(user);
}