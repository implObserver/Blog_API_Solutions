import { useLocalStorage } from "@/shared/lib";
import { defaultIndex } from "../../lib/helper/getDefaultIndex";

export const loadFocus = () => {
    const { getItem } = useLocalStorage('post_constructor_focus');
    const index: Number = getItem();
    return index ? index : defaultIndex;
}