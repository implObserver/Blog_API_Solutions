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

export const modelsToElements = (models: Array<Model<ModelVariant>>) => {

    const elements: Array<ElementData<ElementVariant>> = [];

    models.forEach((model: Model<ModelVariant>) => {
        const element = modelToElement(model);
        elements.push(element);
    });

    return elements;
}

export const modelToElement = (model: Model<ModelVariant>) => {
    let element: ElementData<ElementVariant>;

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

const getMainTitle = (model: Model<ModelVariant>) => {
    const title = MainTitle(model.id);
    title.setValue(model.value);
    return title;
}

const getTitle = (model: Model<ModelVariant>) => {
    const title = Title(model.id);
    title.setValue(model.value);
    return title;
}

const getPreview = (model: Model<ModelVariant>) => {
    const preview = Preview(model.id);
    preview.setImageUrl(model.imageUrl);
    preview.updateVersion(model.version);
    return preview;
}

const getView = (model: Model<ModelVariant>) => {
    const preview = ImageArea(model.id);
    preview.setImageUrl(model.imageUrl);
    return preview;
}

const getTextArea = (model: Model<ModelVariant>) => {
    const textArea = TextArea(model.id);
    textArea.setValue(model.value);
    return textArea;
}

const getListHeader = (model: Model<ModelVariant>) => {
    const listHeader = ListHeader(model.id);
    listHeader.setValue(model.value);
    return listHeader;
}

const getListElement = (model: Model<ModelVariant>) => {
    const listElement = ListElement(model.id);
    listElement.setValue(model.value);
    listElement.setStrong(model.strongText);
    return listElement;
}

const getCodeArea = (model: Model<ModelVariant>) => {
    const codeArea = CodeArea(model.id);
    codeArea.setValue(model.value);
    return codeArea;
}