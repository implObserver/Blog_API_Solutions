export const elementsToModels = (elements: Array<ElementType<TextArea | Preview | Title>>) => {
    const models = [];
    elements.forEach(element => {
        const model =
            element.getType() === 'preview'
                ? getPreviewModel(element)
                : element.getType() === 'title'
                    ? getTitleModel(element)
                    : element.getType() === 'text'
                        ? getTextAreaModel(element)
                        : '';

        models.push(model);
    })

    return models;
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