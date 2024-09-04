import { Link } from "react-router-dom";
import { useShowcasePostsContext } from "../lib/context/Context"
import Cookies from "js-cookie";
import { useMemo } from "react";
export const ShowcasePosts = () => {
    const context = useShowcasePostsContext();
    const userID = Cookies.get('user_id');

    const fill = useMemo(() => {
        return context.map((post, index) => {
            return (
                <div key={post.id}>
                    <Link
                        to={`/user/${userID}/post/${post.id}`}
                        state={index}
                    >
                        {post.title}
                    </Link>
                </div>
            )
        });
    }, [])

    return (
        <div>
            {fill}
        </div>
    )
}