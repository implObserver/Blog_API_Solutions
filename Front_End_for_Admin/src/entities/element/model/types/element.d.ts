//interface ElementContextType {
//index: number,
// panel: PanelContextType,
// container: ContainerContextType,
//}

interface Focus {
    index: Number,
}

interface CanvasElement {
    featuresContext: ElementFeatures,
    elementContext: ElementType<Title | TextArea | Preview>,
    model: ModelType<TextAreaModel | PreviewModel | TitleModel>,
    isFocus?: boolean,
    dropdownStatus: CustomState,
    index: number,
}

interface ElementFeatures {
    panel: FeaturesPanel,
    container: FeaturesContainer,
}

interface UpdateElement {
    newModel: ModelType<TextAreaModel | PreviewModel | TitleModel>,
    model: ModelType<TextAreaModel | PreviewModel | TitleModel>,
}

interface FeaturesPanel {
    features: React.ReactElement[],
}

interface FeaturesContainer {
    features: React.ReactElement,
}

interface ModelPanelContextType {
    visible: Boolean,
}

interface ModelContainerContextType {
    type: string,
    nNum: string,
    value: ElementValueType,
}

interface ValueContainerContextType {
    value: ElementValueType,
}

interface ElementValueType {
    setValue: (val: string) => void;
    getValue: () => string;
}


//Models

interface Models {
    models: Array<ModelType<TextAreaModel | PreviewModel | TitleModel>>
}

interface ModelType<T> {
    id: number,
    type: string,
    value?: string,
    imageUrl?: string,
    fontSize?: number,
}

interface TextAreaModel {
    id: number,
    type: string,
    value: string,
}

interface PreviewModel {
    id: number,
    type: string,
    imageUrl: string,
}

interface TitleModel {
    id: number,
    type: string,
    value: string,
    fontSize: number,
}

interface Counter {
    count: number,
}

interface Refs {
    refs: Ref[],
}

interface Ref {
    id: number,
    ref: React.MutableRefObject<HTMLTextAreaElement | null>,
}

interface SnapShot {
    snapshot: Post,
}
//Elements
interface ElementType<T> {
    getId: () => number,
    getType: () => string,
    getVisible: () => boolean,
    getValue?: () => string,
    getFontSize?: () => number,
    getUrl?: () => string,
    setValue?: (val: string) => void,
    setUrl?: (val: string) => void,
}

interface TextArea {
    getId: () => number,
    getType: () => string,
    getVisible: () => boolean,
    getValue: () => string,
    setValue: (val: string) => void,
}

interface Title {
    getId: () => number,
    getType: () => string,
    getVisible: () => boolean,
    getValue: () => string,
    getFontSize: () => number,
    setValue: (val: string) => void,
}

interface Preview {
    getId: () => number,
    getType: () => string,
    getVisible: () => boolean,
    getUrl: () => string,
    setUrl: (val: string) => void,
}