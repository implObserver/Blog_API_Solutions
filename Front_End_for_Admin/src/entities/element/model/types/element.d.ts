
//interface ElementContextType {
//index: number,
// panel: PanelContextType,
// container: ContainerContextType,
//}

interface CanvasElement {
    featuresContext: ElementFeatures,
    modelContext: ElementModel,
}

interface ElementFeatures {
    panel: FeaturesPanel,
    container: FeaturesContainer,
}

interface FeaturesPanel {
    features: React.ReactElement[],
}

interface FeaturesContainer {
    features: React.ReactElement,
}

interface ElementModel {
    index: number,
    container: ModelContainerContextType,
    panel: ModelPanelContextType
}

interface ModelPanelContextType {
    visible: Boolean,
}

interface ModelContainerContextType {
    type: string,
    nNum: string,
    value: string,
}

interface ElementModels {
    elements: Array<ElementModel>
}