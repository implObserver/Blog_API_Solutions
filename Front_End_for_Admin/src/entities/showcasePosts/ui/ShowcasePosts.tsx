import { Link } from "react-router-dom";
import { useShowcasePostsContext } from "../lib/context/Context"
import Cookies from "js-cookie";

export const ShowcasePosts = () => {
    const posts = useShowcasePostsContext();
    const userID = Cookies.get('user_id');

    const fill = () => {
        return posts.map((post, index) => {
            return (
                <div>
                    <Link
                        to={`/user/${userID}/post/${post.id}`}
                        state={post}
                    >
                        {post.title}
                    </Link>
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