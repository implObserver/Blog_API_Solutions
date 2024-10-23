interface CanvasElement {
    featuresContext: ElementFeatures,
    model: Model<ModelVariant>,
    index: number,
}

interface ElementFeatures {
    container: FeatureContainer,
}

interface FeaturePanel {
    features: React.ReactElement[],
}

interface FeatureContainer {
    features: React.ReactElement,
}
//Models

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
    strong?: string,
    version?: number,
}

interface ListHeaderModel extends BaseModel {
    value: string,
}

interface ListItemModel extends BaseModel {
    strong: string,
    value: string,
}

interface TextModel extends BaseModel {
    value: string,
}

interface PreviewModel extends BaseModel {
    imageUrl: string,
    version: number,
}

interface TitleModel extends BaseModel {
    value: string,
    fontSize: number,
}

interface CodeModel extends BaseModel {
    value: string,
}

interface PreviewState {
    code: string,
    status: boolean,
    image?: string,
}

interface PreviewStates {
    statuses: PreviewState[],
}

//Elements
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
    updateVersion?: (val: number) => void;
    getVersion?: () => number;
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
    getImageUrl: () => string;
    setImageUrl: (val: string) => void;
    updateVersion: (val: number) => void;
    getVersion: () => number;
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