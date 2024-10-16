interface Containers {
    containers: Container[],
}

interface Container {
    states?: localInputsStates,
    containerContext: ContainerContext
}

interface ContainerContext {
    index: number,
    element: ElementType<Title | TextArea | Preview>,
    model: ModelType<TextAreaModel | PreviewModel | TitleModel>,
}