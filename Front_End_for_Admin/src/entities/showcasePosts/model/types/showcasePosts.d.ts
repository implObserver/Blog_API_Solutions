interface Post {
    title: string,
    postingDate: Date,
    isPublished: boolean,
    tag: String,
    elements: Array<ModelType<TextAreaModel | PreviewModel | TitleModel>>,
    comments: Comment[]
}

interface Comment {
    postingDate: Date,
    text: String,
}