interface OpenedPost {
    error?: Error,
    isPending?: Boolean,
    updatePending: Boolean,
    openedPost: Post,
    author: string,
}