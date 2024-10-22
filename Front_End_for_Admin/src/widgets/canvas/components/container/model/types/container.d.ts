interface Containers {
    containers: Container[],
}

interface Container {
    containerContext: ContainerContext
}

interface ContainerContext {
    index: number,
    element: ElementData<ElementVariant>,
    model: Model<ModelVariant>,
}