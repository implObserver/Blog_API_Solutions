interface Containers {
    containers: Container[],
}

interface Container {
    containerContext: ContainerContext
}

interface ContainerContext {
    index: number,
    element: ElementData<TitleElement | TextElement | PreviewElement>,
    model: Model<TextModel | PreviewModel | TitleModel>,
}