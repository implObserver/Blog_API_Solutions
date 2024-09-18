import { selectUserServices } from "@/entities/user"
import { useSelector } from "react-redux"
import styles from './styles/Posts.module.css'
import { CanvasOfPosts } from "../components/canvasOfPosts"
import { CreatePost } from "@/features/createPost"

export const Posts = () => {
    const user = useSelector(selectUserServices).user;

    return (
        <div>
            <span className={styles.text}>Your posts:</span>
            {
                user.posts.length > 0
                    ?
                    <>   
                            <CanvasOfPosts></CanvasOfPosts>
                    </>
                    :
                    <>
                        <div>You have not posts</div>
                    </>
            }

            <CreatePost></CreatePost>
        </div>
    )
}