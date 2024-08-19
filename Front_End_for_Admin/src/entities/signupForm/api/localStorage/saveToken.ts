import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const saveToken = (token: string) => {
    const { setItem } = useLocalStorage('post_constructor_token');
    setItem(token);
}