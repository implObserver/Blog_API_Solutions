interface PostImages {
    postid: number;
    images: ImageType[];
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
    models: Model<ModelVariant>[],
    comments: Comment[],
    author?: string,
}

interface VirtualPost {
    post: Post,
}

interface PostBackups {
    backups: Post[],
}

interface PostsState {
    error?: Error,
    isLoading?: boolean,
    isUpdating: boolean,
    posts: Post[],
    currentPage?: number,
    totalPages?: number,
    totalPosts?: number,
}

interface OpenedPostState {
    error?: Error,
    isLoading?: Boolean,
    isUpdating: Boolean,
    openedPost: Post,
    author: string,
    test: any,
}

interface Comment {
    postingDate: Date,
    text: String,
}

interface PostCell {
    postid?: number,
    newModel?: Model<ModelVariant>,
    model: Model<ModelVariant>,
}

interface UpdateModels {
    postid: number,
    models: Model<ModelVariant>[],
}

interface UpdatePublishStatus {
    postid: number,
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

interface PostPreviewContext {
    deleteFeature: React.ReactElement,
    features?: React.ReactElement[],
    toggle: StateHandler,
    text: StateHandler,
}