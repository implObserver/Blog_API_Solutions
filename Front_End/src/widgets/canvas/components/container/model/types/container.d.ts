interface Containers {
    containers: Container[],
}

interface Container {
    index: number,
    model: Model<TextModel | PreviewModel | TitleModel>,
}

interface ContainerContext {
    index: number,
    element: ElementData<TitleElement | TextElement | PreviewElement>,
    model: Model<TextModel | PreviewModel | TitleModel>,
}