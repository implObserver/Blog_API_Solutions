interface ElementContextType {
    panel: PanelContextType,
    container: ContainerContextType,

}

interface PanelContextType {
    visible: Boolean,
    children: React.ReactElement[],
}

interface ContainerContextType {
    children: React.ReactElement,
}