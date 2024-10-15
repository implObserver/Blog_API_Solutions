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
    error?: Error,
    isPending?: Boolean,
    posts: Post[],
    currentPage?: number,
    totalPages?: number,
    totalPosts?: number,
}

interface Comment {
    postingDate: Date,
    text: String,
}

interface CellOfPost {
    postid?: number,
    newModel?: ModelType<TextAreaModel | PreviewModel | TitleModel>,
    model: ModelType<TextAreaModel | PreviewModel | TitleModel>,
}

interface UpdateModels {
    post_id: number,
    models: ModelType<TextAreaModel | PreviewModel | TitleModel>[],
}

interface UpdatePublishStatus {
    post_id: number,
    status: boolean,
}

interface PostPreviewContextType {
    deleteFeature: React.ReactElement,
    features?: React.ReactElement[],
}