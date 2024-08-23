import { useLocalStorage } from "@/shared/lib";
import { saveToken } from "../token/saveToken";

export const saveUser = (user: User) => {
    saveToken(user.token);
    const { setItem } = useLocalStorage('post_constructor_user');
    setItem(user);
}