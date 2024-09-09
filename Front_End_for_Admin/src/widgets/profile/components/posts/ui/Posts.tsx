import { ShowcasePosts, ShowcasePostsContext } from "@/entities/showcasePosts"
import { selectUserServices } from "@/entities/user"
import { useSelector } from "react-redux"
import styles from './styles/Posts.module.css'
import { CreatePost } from "@/features/createPost/ui/CreatePost"
import { ToBackFromPost } from "@/features/toBackFromPost"

export const Posts = () => {
    const user = useSelector(selectUserServices).user;

    return (
        <div>
            <span className={styles.text}>Your posts:</span>
            {
                user.posts.length > 0
                    ?
                    <>
                        <ShowcasePostsContext.Provider value={user.posts}>
                            <ToBackFromPost>
                                <ShowcasePosts></ShowcasePosts>
                            </ToBackFromPost>
                        </ShowcasePostsContext.Provider>
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