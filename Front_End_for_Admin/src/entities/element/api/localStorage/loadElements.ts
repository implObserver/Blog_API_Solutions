import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"
import { defaultModels } from "../../lib/helper/getDefaultElementModel";
import { modelsToElements } from "../../lib/helper/ModelsToElements";

export const loadElements = () => {
    //localStorage.clear()
    const { getItem } = useLocalStorage('post_constructor_elements');
    const models = getItem();
    console.log('wtf')
    return models ? models : defaultModels;
}