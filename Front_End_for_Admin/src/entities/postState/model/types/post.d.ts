interface PaginationData {
    page: number,
}

interface FocusContext {
    index: Number,
}

interface PostBackups {
    backups: Post[],
}

interface Post {
    id: number,
    title: string,
    postingDate: Date,
    isPublished: boolean,
    tag: string,
    models: Model<ModelVariant>[],
    author?: string,
}

interface CounterState {
    count: number,
}

interface VirtualPost {
    post: Post,
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

interface ImageUpdate {
    folderName: string,
    file: File,
}

interface PostCell {
    postid?: number,
    newModel?: Model<ModelVariant>,
    model: Model<ModelVariant>,
}

interface UpdateAuthor {
    postid: number,
    author: string,
}

interface Snapshot {
    postid: number,
    models: Model<ModelVariant>[],
}

interface Tag {
    postid: number,
    tagName: string,
}

interface UpdateElement {
    postid: number,
    currentModel: Model<ModelVariant>,
    newModel: Model<ModelVariant>,
}