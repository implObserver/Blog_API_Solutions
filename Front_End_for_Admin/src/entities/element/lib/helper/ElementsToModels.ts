export const elementsToModels = (elements: Array<ElementType<TextArea | Preview | Title>>) => {
    const models: Array<ModelType<TextAreaModel | PreviewModel | TitleModel>> = [];
    elements.forEach(element => {
        const model = elementToModel(element);
        models.push(model);
    })

    return models;
}

export const elementToModel = (element: ElementType<TextArea | Preview | Title>) => {
    const model: ModelType<TextAreaModel | PreviewModel | TitleModel> =
        element.getType() === 'preview'
            ? getPreviewModel(element)
            : element.getType().includes('title')
                ? getTitleModel(element)
                : element.getType() === 'text'
                    ? getTextAreaModel(element)
                    : getTextAreaModel(element);
    Object.assign(model, { freshness: 1 });
    return model;
}


const getPreviewModel = (element: ElementType<Title | TextArea | Preview>) => {
    const model: PreviewModel = {
        id: element.getId(),
        type: element.getType(),
        imageUrl: element.getUrl(),
    }
    return model;
}

const getTitleModel = (element: ElementType<Title | TextArea | Preview>) => {
    const model: TitleModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
        fontSize: element.getFontSize(),
    }
    return model;
}

const getTextAreaModel = (element: ElementType<Title | TextArea | Preview>) => {
    const model: TextAreaModel = {
        id: element.getId(),
        type: element.getType(),
        value: element.getValue(),
    }
    return model;
}