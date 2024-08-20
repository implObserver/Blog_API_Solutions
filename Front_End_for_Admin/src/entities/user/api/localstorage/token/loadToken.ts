import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const loadToken = () => {
    const { getItem } = useLocalStorage('post_constructor_token');
    const token = getItem();
    return token;
}