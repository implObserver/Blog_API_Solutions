interface Post {
    id: number,
    title: string,
    postingDate: Date,
    isPublished: boolean,
    tag: String,
    elements: Array<ModelType<TextAreaModel | PreviewModel | TitleModel>>,
    comments: Comment[]
}

interface Posts {
    isPending?: Boolean,
    posts: Post[],
}

interface Comment {
    postingDate: Date,
    text: String,
}

interface CellOfPost {
    index?: number,
    newModel?: ModelType<TextAreaModel | PreviewModel | TitleModel>,
    model: ModelType<TextAreaModel | PreviewModel | TitleModel>,
}

interface UpdateModels {
    index: number,
    models: ModelType<TextAreaModel | PreviewModel | TitleModel>[],
}