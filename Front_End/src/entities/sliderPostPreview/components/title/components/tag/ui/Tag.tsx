import { usePostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { Tag, TagContext } from "@/shared/ui/tag"
import styles from './styles/Tag.module.css'

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