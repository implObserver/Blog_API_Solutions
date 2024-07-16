import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const saveElements = (elements: Array<ElementModel>) => {
    const { setItem } = useLocalStorage('post_constructor_elements');
    setItem(elements);
}