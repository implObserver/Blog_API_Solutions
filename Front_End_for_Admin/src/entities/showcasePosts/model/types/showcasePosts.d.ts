interface Post {
    postingDate: Date,
    isPublished: boolean,
    tag: String,
    elements: Array<ModelType<TextAreaModel | PreviewModel | TitleModel>>,
    comments: Comment[]
    userId: number,
}

interface Comment {
    postingDate: Date,
    userId: number,
    postId: number,
    text: String,
}