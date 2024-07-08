import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const loadElements = () => {
    const { getItem } = useLocalStorage('post_constructor_elements');
    const result = getItem();
    return result ? result : [];
}