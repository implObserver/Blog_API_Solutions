import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const saveFocus = (index: Number) => {
    const { setItem } = useLocalStorage('post_constructor_focus');
    setItem(index);
}