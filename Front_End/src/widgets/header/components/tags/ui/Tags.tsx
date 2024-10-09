import { getTags } from "@/entities/tag/lib/helper/getTags"
import { selectTag } from "@/entities/tag";
import { PostsFilter } from "@/features/postsFilter/ui/PostsFilter";
import { useSelector } from "react-redux";
import styles from './style/Tags.module.css';
import { PostFilterContext } from "@/features/postsFilter/lib/context/Context";
import { selectUserServices } from "@/entities/user";

export const Tags = () => {
    const selectedTag = useSelector(selectTag).tag;
    const tags = getTags();
    const fill = () => {
        return tags.map(tag => {
            const style = tag === selectedTag ? styles.tag : '';
            const postFilterContext: PostFilterType = {
                tag,
                children: <span>{tag}</span>
            }
            return (
                <div className={style} key={tag}>
                    <PostFilterContext.Provider
                        value={postFilterContext}
                    >
                        <PostsFilter></PostsFilter>
                    </PostFilterContext.Provider>
                </div>
            )
        })
    }
    return (
        <div className={styles.tags}>
            {fill()}
        </div>
    )
}