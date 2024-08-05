import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"
import { defaultModels } from "../../lib/helper/getDefaultElementModel";

export const loadModels = () => {
    //localStorage.clear()
    const { getItem } = useLocalStorage('post_constructor_models');
    const models = getItem();
    return models ? models : defaultModels;
}