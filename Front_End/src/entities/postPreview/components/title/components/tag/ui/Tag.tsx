import { TagContext } from "@/shared/ui/tag"
import styles from './styles/Tag.module.css'
import { usePostPreviewContext } from "@/entities/postPreview/lib";

export const TagOfPost = () => {
    const context = usePostPreviewContext();
    const children = context.tag;
    return (
        <div className={styles.tag}>
            <TagContext.Provider value={context.post.tag}>
                {children}
            </TagContext.Provider>
        </div>
    )
}