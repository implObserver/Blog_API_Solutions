interface Containers {
    containers: Container[],
}

interface Container {
    canvasUpdate?: CustomState
    containerContext: ContainerContext
}

interface CustomState {
    toggle: () => void,
    setState: (val: boolean) => void,
    getState: () => boolean,
}

interface ContainerContext {
    index: number,
    element: ElementType<Title | TextArea | Preview>,
    model: ModelType<TextAreaModel | PreviewModel | TitleModel>,
}