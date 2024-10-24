export const elementsToModels = (elements: Array<ElementData<ElementVariant>>) => {
    const models: Array<Model<ModelVariant>> = [];
    elements.forEach(element => {
        const model = elementToModel(element);
        models.push(model);
    })

    return models;
}

export const elementToModel = (element: ElementData<ElementVariant>) => {
    let model: Model<ModelVariant>;
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
        case elementType === 'code':
            model = getCodeAreaModel(element);
            break;
        default:
            model = getTextAreaModel(element); // По умолчанию
            break;
    }

    Object.assign(model, { freshness: 1 });
    return model;
};


const getPreviewModel = (element: ElementData<ElementVariant>) => {
    const model: PreviewModel = {
        id: element.getId(),
        type: element.getType(),
        imageUrl: element.getImageUrl(),
        version: element.getVersion(),
    }
    return model;
}

const getTitleModel = (element: ElementData<ElementVariant>) => {
    const model: TitleModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
        fontSize: element.getFontSize(),
    }
    return model;
}

const getTextAreaModel = (element: ElementData<ElementVariant>) => {
    const model: TextModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
    }
    return model;
}

const getCodeAreaModel = (element: ElementData<ElementVariant>) => {
    const model: CodeModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
    }
    return model;
}

const getListHeaderModel = (element: ElementData<ElementVariant>) => {
    const model: ListHeaderModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
    }
    return model;
}

const getListElementModel = (element: ElementData<ElementVariant>) => {
    const model: ListItemModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
        strongText: element.getStrongText(),
    }
    return model;
}