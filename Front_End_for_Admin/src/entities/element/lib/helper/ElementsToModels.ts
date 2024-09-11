export const elementsToModels = (elements: Array<ElementType<ElementSubtype>>) => {
    const models: Array<ModelType<ModelSubtype>> = [];
    elements.forEach(element => {
        const model = elementToModel(element);
        models.push(model);
    })

    return models;
}

export const elementToModel = (element: ElementType<ElementSubtype>) => {
    let model: ModelType<ModelSubtype>;
    const elementType = element.getType();

    switch (true) {
        case elementType.includes('view'):
            model = getPreviewModel(element);
            break;
        case elementType.includes('title'):
            model = getTitleModel(element);
            break;
        case elementType === 'text':
            model = getTextAreaModel(element);
            break;
        case elementType === 'list_header':
            model = getListHeaderModel(element);
            break;
        case elementType === 'list_element':
            model = getListElementModel(element);
            break;
        default:
            model = getTextAreaModel(element); // По умолчанию
            break;
    }

    Object.assign(model, { freshness: 1 });
    return model;
};


const getPreviewModel = (element: ElementType<ElementSubtype>) => {
    const model: PreviewModel = {
        id: element.getId(),
        type: element.getType(),
        imageUrl: element.getUrl(),
    }
    return model;
}

const getTitleModel = (element: ElementType<ElementSubtype>) => {
    const model: TitleModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
        fontSize: element.getFontSize(),
    }
    return model;
}

const getTextAreaModel = (element: ElementType<ElementSubtype>) => {
    const model: TextAreaModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
    }
    return model;
}

const getListHeaderModel = (element: ElementType<ElementSubtype>) => {
    const model: ListHeaderModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
    }
    return model;
}