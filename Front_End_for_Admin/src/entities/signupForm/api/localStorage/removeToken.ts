import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const removeToken = () => {
    const { removeItem } = useLocalStorage('post_constructor_token');
    removeItem();
}