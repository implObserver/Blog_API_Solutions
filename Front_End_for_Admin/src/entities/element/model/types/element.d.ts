interface FocusContext {
    index: Number,
}

interface CanvasElement {
    features?: ElementFeatures,
    element: ElementData<ElementVariant>,
    model: Model<ModelVariant>,
    isFocused?: boolean,
    dropdownState?: CustomState,
    index: number,
    updater?: CustomState,
}

interface ElementFeatures {
    panel: FeaturePanel,
    container: FeatureContainer,
}

interface UpdateElement {
    newModel: Model<ModelVariant>,
    currentModel: Model<ModelVariant>,
    postid: number,
}

interface FeaturePanel {
    features: React.ReactElement[],
}

interface FeatureContainer {
    features: React.ReactElement,
}

interface ModelPanelState {
    isVisible: Boolean,
}

interface ModelContainerState {
    type: string,
    identifier: string,
    value: ElementValue,
}

interface ValueContainerState {
    value: ElementValue,
}

interface ElementValue {
    setValue: (val: string) => void;
    getValue: () => string;
}


//Models

interface ModelsData {
    models: Array<Model<ModelVariant>>
    author: string,
}

interface BaseModel {
    id: number,
    type: string,
}

type ModelVariant = TitleModel
    | TextModel
    | PreviewModel
    | ListHeaderModel
    | ListItemModel;

interface Model<T> {
    id: number,
    type: string,
    value?: string,
    imageUrl?: string,
    fontSize?: number,
    strongText?: string,
}

interface ListHeaderModel extends BaseModel {
    value: string,
}

interface ListItemModel extends BaseModel {
    strongText: string,
    value: string,
}

interface TextModel extends BaseModel {
    value: string,
}

interface PreviewModel extends BaseModel {
    imageUrl: string,
}

interface TitleModel extends BaseModel {
    value: string,
    fontSize: number,
}

interface CodeModel extends BaseModel {
    value: string,
}

interface CounterState {
    count: number,
}

interface Snapshot {
    postid: number,
    elements: Array<Model<TextModel | PreviewModel | TitleModel>>,
}
//Elements
interface PreviewState {
    code: string,
    status: boolean,
    image?: string,
}

interface PreviewStates {
    statuses: PreviewState[],
}
interface BaseElement {
    getId: () => number;
    getType: () => string;
    isVisible: () => boolean;
}

type ElementVariant = TitleElement
    | TextElement
    | PreviewElement
    | ListHeaderElement
    | ListItemElement;

interface ElementData<T> {
    getId: () => number;
    getType: () => string;
    getVisible: () => boolean;
    getValue?: () => string;
    getFontSize?: () => number;
    getImageUrl?: () => string;
    setValue?: (val: string) => void;
    setImageUrl?: (val: string) => void;
    getStrongText?: () => string;
    setStrongText?: (val: string) => void;
}

interface TextElement extends BaseElement {
    getValue: () => string;
    setValue: (val: string) => void;
}

interface TitleElement extends BaseElement {
    getValue: () => string,
    getFontSize: () => number,
    setValue: (val: string) => void,
}

interface PreviewElement extends BaseElement {
    getUrl: () => string;
    setUrl: (val: string) => void;
}

interface ListHeaderElement extends BaseElement {
    getValue: () => string;
    setValue: (val: string) => void;
}

interface ListItemElement extends BaseElement {
    getValue: () => string;
    setValue: (val: string) => void;
    getStrongText: () => string;
    setStrongText: (val: string) => void;
}

interface CodeElement extends BaseElement {
    getValue: () => string;
    setValue: (val: string) => void;
}