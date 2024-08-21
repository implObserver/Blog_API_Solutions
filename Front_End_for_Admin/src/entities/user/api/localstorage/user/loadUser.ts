import { useLocalStorage } from "@/shared/lib";

export const loadUser = () => {
    const { getItem } = useLocalStorage('post_constructor_user');
    const user: User = getItem();
    return user;
}