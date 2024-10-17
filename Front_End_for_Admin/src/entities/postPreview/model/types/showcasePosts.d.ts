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
    elements: Array<Model<TextModel | PreviewModel | TitleModel>>,
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
    newModel?: Model<TextModel | PreviewModel | TitleModel>,
    model: Model<TextModel | PreviewModel | TitleModel>,
}

interface UpdateModels {
    postid: number,
    models: Model<TextModel | PreviewModel | TitleModel>[],
}

interface UpdatePublishStatus {
    post_id: number,
    status: boolean,
}

interface UpdateAuthor {
    postid: number,
    author: string,
}

interface UpdateTitle {
    postid: number,
    title: string,
}

interface PostPreviewContextType {
    deleteFeature: React.ReactElement,
    features?: React.ReactElement[],
    toggle: CustomState,
    text: CustomState,
}