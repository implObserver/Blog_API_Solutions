import { usePostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { Tag, TagContext } from "@/shared/ui/tag"
import styles from './styles/Tag.module.css'

export const TagOfPost = () => {
    const context = usePostPreviewContext();

    return (
        <div className={styles.tag}>
            <TagContext.Provider value={context.post.tag}>
                <Tag></Tag>
            </TagContext.Provider>
        </div>
    )
}