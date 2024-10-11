interface Containers {
    containers: Container[],
}

interface Container {
    index: number,
    model: ModelType<TextAreaModel | PreviewModel | TitleModel>,
}

interface ContainerContext {
    index: number,
    element: ElementType<Title | TextArea | Preview>,
    model: ModelType<TextAreaModel | PreviewModel | TitleModel>,
}