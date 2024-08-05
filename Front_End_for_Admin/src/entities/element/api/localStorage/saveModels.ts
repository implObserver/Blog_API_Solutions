import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"

export const saveModels = (models: Array<ModelType<TextAreaModel | PreviewModel | TitleModel>>) => {
    const { setItem } = useLocalStorage('post_constructor_models');
    setItem(models);
}