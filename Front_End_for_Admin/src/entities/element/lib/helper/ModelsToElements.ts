import { Preview, TextArea, Title } from "./ElementValue";

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
        model.type === 'title'
            ? getTitle(model)
            : model.type === 'preview'
                ? getPreview(model)
                : model.type === 'text'
                    ? getTextArea(model)
                    : getTextArea(model);
    return element;
}

const getTitle = (model: ModelType<TextAreaModel | PreviewModel | TitleModel>) => {
    const title = Title(model.fontSize);
    title.setId(model.id);
    title.setValue(model.value);
    return title;
}

const getPreview = (model: ModelType<TextAreaModel | PreviewModel | TitleModel>) => {
    const preview = Preview();
    preview.setId(model.id);
    preview.setUrl(model.imageUrl);
    return preview;
}

const getTextArea = (model: ModelType<TextAreaModel | PreviewModel | TitleModel>) => {
    const textArea = TextArea();
    textArea.setId(model.id);
    textArea.setValue(model.value);
    return textArea;
}