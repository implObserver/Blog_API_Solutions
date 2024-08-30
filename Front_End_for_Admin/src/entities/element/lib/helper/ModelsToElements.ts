import { Preview, TextArea, MainTitle, Title, ImageArea } from "./modelsOfElements";

export const modelsToElements = (models: Array<ModelType<TextAreaModel | PreviewModel | TitleModel>>) => {
    console.log(models)
    const elements: Array<ElementType<Title | TextArea | Preview>> = [];

    models.forEach((model: ModelType<TextAreaModel | PreviewModel | TitleModel>) => {
        const element = modelToElement(model);
        elements.push(element);
    });

    return elements;
}

export const modelToElement = (model: ModelType<TextAreaModel | PreviewModel | TitleModel>) => {
    const element: ElementType<Title | TextArea | Preview> =
        model.type === 'main_title'
            ? getMainTitle(model)
            : model.type === 'title'
                ? getTitle(model)
                : model.type === 'preview'
                    ? getPreview(model)
                    : model.type === 'view'
                        ? getView(model)
                        : model.type === 'text'
                            ? getTextArea(model)
                            : getTextArea(model);
    return element;
}

const getMainTitle = (model: ModelType<TextAreaModel | PreviewModel | TitleModel>) => {
    const title = MainTitle(model.id);
    console.log(model.id);
    title.setValue(model.value);
    return title;
}

const getTitle = (model: ModelType<TextAreaModel | PreviewModel | TitleModel>) => {
    const title = Title(model.id);
    title.setValue(model.value);
    return title;
}

const getPreview = (model: ModelType<TextAreaModel | PreviewModel | TitleModel>) => {
    const preview = Preview(model.id);
    preview.setUrl(model.imageUrl);
    return preview;
}

const getView = (model: ModelType<TextAreaModel | PreviewModel | TitleModel>) => {
    const preview = ImageArea(model.id);
    preview.setUrl(model.imageUrl);
    return preview;
}

const getTextArea = (model: ModelType<TextAreaModel | PreviewModel | TitleModel>) => {
    const textArea = TextArea(model.id);
    textArea.setValue(model.value);
    return textArea;
}