import { getTags, selectTag } from "@/entities/tag";
import { useSelector } from "react-redux";
import styles from './style/Tags.module.css';
import { PostFilterContext, PostsFilter } from "@/features/postsFilter";

export const Tags = () => {
    const selectedTag = useSelector(selectTag).tag;
    const tags = getTags();
    const fill = () => {
        return tags.map(tag => {
            const style = tag === selectedTag ? styles.tag : styles.not_active_tag;
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