import { useLocalStorage } from "@/shared/lib";
import { defaultModels } from "../../lib/helper/getDefaultElementModel";

export const loadModels = () => {
    //localStorage.clear()
    const { getItem } = useLocalStorage('post_constructor_models');
    const models = getItem();
    return models ? models : defaultModels;
}