import { useShowcasePostsContext } from "../lib/context/Context"

export const ShowcasePosts = () => {
    const posts = useShowcasePostsContext();

    const fill = () => {
        return posts.map((post, index) => {
            return (
                <div>
                    {post.title}
                </div>
            )
        })
    }

    return (
        <div>
            {fill()}
        </div>
    )
}