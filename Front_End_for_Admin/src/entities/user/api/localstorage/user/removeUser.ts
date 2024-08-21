import { useLocalStorage } from "@/shared/lib";

export const removeUser = () => {
    const { removeItem } = useLocalStorage('post_constructor_user');
    removeItem();
}