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

interface PreviewState {
    code: string,
    status: boolean,
    image?: string,
}

interface PreviewStates {
    statuses: PreviewState[],
}