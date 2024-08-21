import { useLocalStorage } from "@/shared/lib";

export const removeToken = () => {
    const { removeItem } = useLocalStorage('post_constructor_token');
    removeItem();
}