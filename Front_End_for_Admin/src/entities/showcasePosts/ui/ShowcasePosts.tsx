import { Link } from "react-router-dom";
import { useShowcasePostsContext } from "../lib/context/Context"
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath } from "@/app/model/store/Store";
import { useEffect, useMemo } from "react";
import { postsActions } from "../model/slice/slice";
import { selectPosts } from "../model/slice/selectors";
import { getPostsOfUser } from "../model/slice/thunks/get/getPostsOfUser";
import { localPostsActions } from "@/entities/element/model/slice/localPosts/slice";
import { selectLocalPosts } from "@/entities/element/model/slice/localPosts/selectors";

export const ShowcasePosts = () => {
    const context = useShowcasePostsContext();
    const userID = Cookies.get('user_id');
    const pending = useSelector(selectPosts).isPending;
   
    const fill = useMemo(() => {
        return context.map((post, index) => {
            const state = {

                elements: post.elements,
            }
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

    if (!pending) {
        return (
            <div>
                {fill}
            </div>
        )
    }
}