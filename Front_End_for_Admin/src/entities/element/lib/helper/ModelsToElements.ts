import {
    createPreview,
    createTextArea,
    createMainTitle,
    createTitle,
    createImageArea,
    createListHeader,
    createListElement,
    createCodeArea
} from "./modelsOfElements";

export const convertModelsToElements = (models: Array<Model<ModelVariant>>) => {
    const elements: Array<ElementData<ElementVariant>> = [];

    models.forEach((model: Model<ModelVariant>) => {
        const element = convertModelToElement(model);
        elements.push(element);
    });

    return elements;
}

export const convertModelToElement = (model: Model<ModelVariant>) => {
    let element: ElementData<ElementVariant>;

    switch (model.type) {
        case 'main_title':
            element = createMainTitleElement(model);
            break;
        case 'title':
            element = createTitleElement(model);
            break;
        case 'preview':
            element = createPreviewElement(model);
            break;
        case 'view':
            element = createViewElement(model);
            break;
        case 'text':
            element = createTextAreaElement(model);
            break;
        case 'list_header':
            element = createListHeaderElement(model);
            break;
        case 'list_element':
            element = createListElementItem(model);
            break;
        case 'code':
            element = createCodeAreaElement(model);
            break;
        default:
            element = createTextAreaElement(model);
            break;
    }

    return element;
};

const createMainTitleElement = (model: Model<ModelVariant>) => {
    const title = createMainTitle(model.id);
    title.setValue(model.value);
    return title;
}

const createTitleElement = (model: Model<ModelVariant>) => {
    const title = createTitle(model.id);
    title.setValue(model.value);
    return title;
}

const createPreviewElement = (model: Model<ModelVariant>) => {
    const preview = createPreview(model.id);
    preview.setUrl(model.imageUrl);
    return preview;
}

const createViewElement = (model: Model<ModelVariant>) => {
    const preview = createImageArea(model.id);
    preview.setUrl(model.imageUrl);
    return preview;
}

const createTextAreaElement = (model: Model<ModelVariant>) => {
    const textArea = createTextArea(model.id);
    textArea.setValue(model.value);
    return textArea;
}

const createListHeaderElement = (model: Model<ModelVariant>) => {
    const listHeader = createListHeader(model.id);
    listHeader.setValue(model.value);
    return listHeader;
}

const createListElementItem = (model: Model<ModelVariant>) => {
    const listElement = createListElement(model.id);
    listElement.setValue(model.value);
    listElement.setStrongText(model.strongText);
    return listElement;
}

const createCodeAreaElement = (model: Model<ModelVariant>) => {
    const codeArea = createCodeArea(model.id);
    codeArea.setValue(model.value);
    return codeArea;
}