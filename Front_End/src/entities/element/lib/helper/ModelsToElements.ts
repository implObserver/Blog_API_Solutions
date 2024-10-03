import {
    Preview,
    TextArea,
    MainTitle,
    Title,
    ImageArea,
    ListHeader,
    ListElement,
    CodeArea
} from "./modelsOfElements";

export const modelsToElements = (models: Array<ModelType<ModelSubtype>>) => {

    const elements: Array<ElementType<ElementSubtype>> = [];

    models.forEach((model: ModelType<ModelSubtype>) => {
        const element = modelToElement(model);
        elements.push(element);
    });

    return elements;
}

export const modelToElement = (model: ModelType<ModelSubtype>) => {
    let element: ElementType<ElementSubtype>;

    switch (model.type) {
        case 'main_title':
            element = getMainTitle(model);
            break;
        case 'title':
            element = getTitle(model);
            break;
        case 'preview':
            element = getPreview(model);
            break;
        case 'view':
            element = getView(model);
            break;
        case 'text':
            element = getTextArea(model);
            break;
        case 'list_header':
            element = getListHeader(model);
            break;
        case 'list_element':
            element = getListElement(model);
            break;
        case 'code':
            element = getCodeArea(model);
            break;
        default:
            element = getTextArea(model);
            break;
    }

    return element;
};

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

const getCodeArea = (model: ModelType<ModelSubtype>) => {
    const codeArea = CodeArea(model.id);
    codeArea.setValue(model.value);
    return codeArea;
}