interface Containers {
    containers: Container[],
}

interface Container {
    index: number,
    element: ElementType<Title | TextArea>,
    model: ModelType<TextAreaModel | PreviewModel | TitleModel>,
}