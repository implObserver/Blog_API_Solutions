interface PaginationData {
    page: number,
    postid?: number,
}

interface CounterState {
    count: number,
}

interface SnapShot {
    snapshot: Post,
}

interface OpenedPostState {
    error?: Error,
    isLoading?: Boolean,
    updatePending: Boolean,
    openedPost: Post,
    author: string,
}

interface Post {
    id: number,
    title: string,
    postingDate: Date,
    isPublished: boolean,
    tag: string,
    models: Model<ModelVariant>[],
    comments: PostComment[]
    author: string,
    user?: UserData,
}

interface Posts {
    error?: Error,
    isLoading?: Boolean,
    posts: Post[],
    currentPage: number,
    totalPages: number,
}