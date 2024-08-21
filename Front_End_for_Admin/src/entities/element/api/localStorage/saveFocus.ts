import { useLocalStorage } from "@/shared/lib";

export const saveFocus = (index: Number) => {
    const { setItem } = useLocalStorage('post_constructor_focus');
    setItem(index);
}