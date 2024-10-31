interface PostComment {
    id?: number,
    postingDate?: Date,
    text: string,
    post_id?: string,
    user?: UserData,
    isUpdate?: boolean,
    updatingDate?: Date,
}

interface Comments {
    error: Error,
    comments: PostComment[],
    isLoading?: boolean,
    totalPages: number,
    currentPage: number,
    totalComments: number,
    isUpdate?: boolean,
    updatingDate?: Date,
    isEmit: number,
}