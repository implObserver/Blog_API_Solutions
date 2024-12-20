import { useParams } from "react-router-dom";
import { getTagList } from "../lib/helper/getTagList"
import { useSelector } from "react-redux";
import { Tag, TagContext } from "@/shared/ui/tag";
import styles from './styles/SelectTag.module.css'
import { useAppDispatch } from "@/shared/lib";
import { openedPostActions, selectOpenedPost, updateTag, virtualPostActions } from "@/entities/postState";

export const SelectTag = () => {
    const params = useParams();
    const postid = parseInt(params.postid);
    const post = useSelector(selectOpenedPost).openedPost;
    const dispatch = useAppDispatch();

    const tags = getTagList(post.tag);

    const onClick = (tag: string) => {
        const args: Tag = {
            postid,
            tagName: tag,
        }
        dispatch(virtualPostActions.updateTag(tag));
        dispatch(openedPostActions.updateTag(tag));
    }

    const fill = () => {
        return tags.map((tag) => {
            return (
                <div
                    className={styles.tag}
                    onClick={() => onClick(tag)}
                    key={tag}
                >
                    <TagContext.Provider value={tag}>
                        <Tag></Tag>
                    </TagContext.Provider>
                </div>
            )
        })
    }
    return (
        <div>
            {fill()}
        </div>
    )
}