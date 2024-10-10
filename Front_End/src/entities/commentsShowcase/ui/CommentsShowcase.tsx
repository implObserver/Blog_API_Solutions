import { useCommentsShowcaseContext } from "../lib/context/Context";

export const CommentsShowcase = () => {
    const post = useCommentsShowcaseContext();

    if (post.comments) {
        const fill = () => {
            return post.comments.map(comment => {
                return (
                    <div>
                        <span>{comment.text}</span>
                    </div>
                )
            })
        }

        return (
            <div>
                {fill()}
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}