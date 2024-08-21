import { useLocalStorage } from "@/shared/lib";

export const loadToken = () => {
    const { getItem } = useLocalStorage('post_constructor_token');
    const token = getItem();
    return token;
}