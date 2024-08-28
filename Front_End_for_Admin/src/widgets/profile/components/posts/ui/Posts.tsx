import { ShowcasePosts } from "@/entities/showcasePosts"
import { selectUserServices } from "@/entities/user"
import { useSelector } from "react-redux"
import styles from './styles/Posts.module.css'
import { CreatePost } from "@/features/createPost/ui/CreatePost"

export const Posts = () => {
    const user = useSelector(selectUserServices).user;

    return (
        <div>
            <span>Your posts:</span>
            {
                user.posts.length > 0
                    ? <ShowcasePosts></ShowcasePosts>
                    :
                    <>
                        <div>You have not posts</div>
                    </>
            }

            <CreatePost></CreatePost>
        </div>
    )
}