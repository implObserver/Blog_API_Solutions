interface PostImages {
    post_id: number;
    images: Array<ImageType>;
}
interface ImageType {
    code: string,
    blob: Blob,
    isRetry?: boolean,
}
interface Post {
    id: number,
    title: string,
    postingDate: Date,
    isPublished: boolean,
    tag: string,
    elements: Array<ModelType<TextAreaModel | PreviewModel | TitleModel>>,
    comments: Comment[]
}

interface Posts {
    isPending?: Boolean,
    posts: Post[],
}

interface Comment {
    postingDate: Date,
    text: String,
}

interface CellOfPost {
    post_id?: number,
    newModel?: ModelType<TextAreaModel | PreviewModel | TitleModel>,
    model: ModelType<TextAreaModel | PreviewModel | TitleModel>,
}

interface UpdateModels {
    post_id: number,
    models: ModelType<TextAreaModel | PreviewModel | TitleModel>[],
}

interface PostPreviewContextType {
    deleteFeature: React.ReactElement,
}