interface PostImages {
    postid: number;
    images: ImageType[];
}
interface ImageType {
    code: string,
    version: number,
    blob: Blob,
    isRetry?: boolean,
}

interface UpdateModels {
    postid: number,
    models: Model<ModelVariant>[],
}

interface UpdatePublishStatus {
    postid: number,
    status: boolean,
}

interface UpdateTitle {
    postid: number,
    title: string,
}

interface PostPreviewContext {
    deleteFeature: React.ReactElement,
    features?: React.ReactElement[],
    toggle: StateHandler<boolean>,
    text: StateHandler<string>,
}