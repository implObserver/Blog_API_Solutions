import { Preview, TextArea, MainTitle, Title, ImageArea, ListHeader, ListElement } from "./modelsOfElements";

export const modelsToElements = (models: Array<ModelType<ModelSubtype>>) => {

    const elements: Array<ElementType<ElementSubtype>> = [];

    models.forEach((model: ModelType<ModelSubtype>) => {
        const element = modelToElement(model);
        elements.push(element);
    });

    return elements;
}

export const modelToElement = (model: ModelType<ModelSubtype>) => {
    const element: ElementType<ElementSubtype> =
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
                            : model.type === 'list_header'
                                ? getListHeader(model)
                                : model.type === 'list_element'
                                    ? getListElement(model)
                                    : getTextArea(model);
    return element;
}

const getMainTitle = (model: ModelType<ModelSubtype>) => {
    const title = MainTitle(model.id);
    title.setValue(model.value);
    return title;
}

const getTitle = (model: ModelType<ModelSubtype>) => {
    const title = Title(model.id);
    title.setValue(model.value);
    return title;
}

const getPreview = (model: ModelType<ModelSubtype>) => {
    const preview = Preview(model.id);
    preview.setUrl(model.imageUrl);
    return preview;
}

const getView = (model: ModelType<ModelSubtype>) => {
    const preview = ImageArea(model.id);
    preview.setUrl(model.imageUrl);
    return preview;
}

const getTextArea = (model: ModelType<ModelSubtype>) => {
    const textArea = TextArea(model.id);
    textArea.setValue(model.value);
    return textArea;
}

const getListHeader = (model: ModelType<ModelSubtype>) => {
    const listHeader = ListHeader(model.id);
    listHeader.setValue(model.value);
    return listHeader;
}

const getListElement = (model: ModelType<ModelSubtype>) => {
    const listElement = ListElement(model.id);
    listElement.setValue(model.value);
    listElement.setStrong(model.strong);
    return listElement;
}