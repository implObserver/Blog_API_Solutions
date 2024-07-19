import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const saveElements = (models: Array<ModelType<TextAreaModel | PreviewModel | TitleModel>>) => {
    const { setItem, removeItem } = useLocalStorage('post_constructor_elements');
    console.log(models)
    removeItem();
    setItem(models);
}