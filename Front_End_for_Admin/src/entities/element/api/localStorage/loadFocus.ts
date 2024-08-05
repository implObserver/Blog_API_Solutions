import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"
import { defaultIndex } from "../../lib/helper/getDefaultIndex";

export const loadFocus = () => {
    const { getItem } = useLocalStorage('post_constructor_focus');
    const index: Number = getItem();
    console.log(`defaultIndex ${defaultIndex}`)
    return index ? index : defaultIndex;
}