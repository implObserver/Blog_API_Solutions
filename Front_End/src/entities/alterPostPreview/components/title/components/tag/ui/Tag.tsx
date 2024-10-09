import { usePostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { Tag, TagContext } from "@/shared/ui/tag"
import styles from './styles/Tag.module.css'
import { useAlterPostPreviewContext } from "@/entities/alterPostPreview/lib/context/Context";

export const TagOfPost = () => {
    const context = useAlterPostPreviewContext();
    const children = context.tag;
    return (
        <div className={styles.tag}>
            <TagContext.Provider value={context.post.tag}>
                {children}
            </TagContext.Provider>
        </div>
    )
}