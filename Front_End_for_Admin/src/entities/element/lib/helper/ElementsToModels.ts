export const convertElementsToModels = (elements: Array<ElementData<ElementVariant>>) => {
    const models: Array<Model<ModelVariant>> = [];
    elements.forEach(element => {
        const model = convertElementToModel(element);
        models.push(model);
    })

    return models;
}

export const convertElementToModel = (element: ElementData<ElementVariant>) => {
    let model: Model<ModelVariant>;
    const elementType = element.getType();

    switch (true) {
        case elementType.includes('view'):
            model = createPreviewModel(element);
            break;
        case elementType.includes('title'):
            model = createTitleModel(element);
            break;
        case elementType === 'text':
            model = createTextAreaModel(element);
            break;
        case elementType === 'list_header':
            model = createListHeaderModel(element);
            break;
        case elementType === 'list_element':
            model = createListElementModel(element);
            break;
        case elementType === 'code':
            model = createCodeAreaModel(element);
            break;
        default:
            model = createTextAreaModel(element); // По умолчанию
            break;
    }

    Object.assign(model, { freshness: 1 });
    return model;
};


const createPreviewModel = (element: ElementData<ElementVariant>) => {
    console.log(element)
    const model: PreviewModel = {
        id: element.getId(),
        type: element.getType(),
        imageUrl: element.getImageUrl(),
    }
    return model;
}

const createTitleModel = (element: ElementData<ElementVariant>) => {
    const model: TitleModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
        fontSize: element.getFontSize(),
    }
    return model;
}

const createTextAreaModel = (element: ElementData<ElementVariant>) => {
    const model: TextModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
    }
    return model;
}

const createCodeAreaModel = (element: ElementData<ElementVariant>) => {
    const model: CodeModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
    }
    return model;
}

const createListHeaderModel = (element: ElementData<ElementVariant>) => {
    const model: ListHeaderModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
    }
    return model;
}

const createListElementModel = (element: ElementData<ElementVariant>) => {
    const model: ListItemModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
        strongText: element.getStrongText(),
    }
    return model;
}