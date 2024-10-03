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
    model: ModelType<ModelSubtype>,
    index: number,
}

interface ElementFeatures {
    container: FeaturesContainer,
}

interface UpdateElement {
    newModel: ModelType<ModelSubtype>,
    model: ModelType<ModelSubtype>,
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
    models: Array<ModelType<ModelSubtype>>
}

interface BaseModel {
    id: number,
    type: string,
}

type ModelSubtype = TitleModel
    | TextAreaModel
    | PreviewModel
    | ListHeaderModel
    | ListElementModel;

interface ModelType<T> {
    id: number,
    type: string,
    value?: string,
    imageUrl?: string,
    fontSize?: number,
    strong?: string,
}

interface ListHeaderModel extends BaseModel {
    value: string,
}

interface ListElementModel extends BaseModel {
    strong: string,
    value: string,
}

interface TextAreaModel extends BaseModel {
    value: string,
}

interface PreviewModel extends BaseModel {
    imageUrl: string,
}

interface TitleModel extends BaseModel {
    value: string,
    fontSize: number,
}

interface CodeAreaModel extends BaseModel {
    value: string,
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
interface PreviewStatus {
    code: string,
    status: boolean,
    image?: string,
}

interface PreviewStatuses {
    statuses: PreviewStatus[],
}
interface BaseElement {
    getId: () => number;
    getType: () => string;
    getVisible: () => boolean;
}

type ElementSubtype = Title
    | TextArea
    | Preview
    | ListHeader
    | ListElement;

interface ElementType<T> {
    getId: () => number;
    getType: () => string;
    getVisible: () => boolean;
    getValue?: () => string;
    getFontSize?: () => number;
    getUrl?: () => string;
    setValue?: (val: string) => void;
    setUrl?: (val: string) => void;
    getStrong?: () => string;
    setStrong?: (val: string) => void;
}

interface TextArea extends BaseElement {
    getValue: () => string;
    setValue: (val: string) => void;
}

interface Title extends BaseElement {
    getValue: () => string,
    getFontSize: () => number,
    setValue: (val: string) => void,
}

interface Preview extends BaseElement {
    getUrl: () => string;
    setUrl: (val: string) => void;
}

interface ListHeader extends BaseElement {
    getValue: () => string;
    setValue: (val: string) => void;
}

interface ListElement extends BaseElement {
    getValue: () => string;
    setValue: (val: string) => void;
    getStrong: () => string;
    setStrong: (val: string) => void;
}

interface Code extends BaseElement {
    getValue: () => string;
    setValue: (val: string) => void;
}