import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const removeUser = () => {
    const { removeItem } = useLocalStorage('post_constructor_user');
    removeItem();
}