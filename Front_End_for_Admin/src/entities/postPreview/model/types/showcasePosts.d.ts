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
    comments: Comment[],
    author?: string,
}

interface Posts {
    error?: Error,
    isPending?: Boolean,
    updatePending: Boolean,
    posts: Post[],
    currentPage?: number,
    totalPages?: number,
    totalPosts?: number,
}

interface OpenedPost {
    error?: Error,
    isPending?: Boolean,
    updatePending: Boolean,
    openedPost: Post,
    author: string,
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
    postid: number,
    models: ModelType<TextAreaModel | PreviewModel | TitleModel>[],
}

interface UpdatePublishStatus {
    post_id: number,
    status: boolean,
}

interface UpdateAuthor {
    post_id: number,
    author: string,
}

interface PostPreviewContextType {
    deleteFeature: React.ReactElement,
    features?: React.ReactElement[],
}