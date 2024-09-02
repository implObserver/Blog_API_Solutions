import { Link } from "react-router-dom";
import { useShowcasePostsContext } from "../lib/context/Context"
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { useEffect } from "react";
import { postsActions } from "../model/slice/slice";
import { selectPosts } from "../model/slice/selectors";

export const ShowcasePosts = () => {
    const context = useShowcasePostsContext();
    console.log(context)
    const userID = Cookies.get('user_id');

    const dispatch = useDispatch<AppDispath>();

    useEffect(() => {
        dispatch(postsActions.uploadPosts(context))
    }, [])

    const posts = useSelector(selectPosts).posts;
    console.log(posts)
    const fill = () => {
        return posts.map((post, index) => {
            console.log(posts.length)
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
        })
    }

    return (
        <div>
            {fill()}
        </div>
    )
}