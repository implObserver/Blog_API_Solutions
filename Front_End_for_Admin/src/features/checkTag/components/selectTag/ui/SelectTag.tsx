import { useParams } from "react-router-dom";
import { getTagList } from "../lib/helper/getTagList"
import { useDispatch, useSelector } from "react-redux";
import { Tag, TagContext } from "@/shared/ui/tag";
import { AppDispath } from "@/app/model/store/Store";
import styles from './styles/SelectTag.module.css'
import { updateTag } from "@/entities/postState/model/slice/openedPost/thunks/update/updateTag";
import { selectOpenedPost } from "@/entities/postState/model/slice/openedPost/selectors";

export const SelectTag = () => {
    const params = useParams();
    const postid = parseInt(params.postid);
    const post = useSelector(selectOpenedPost).openedPost;
    const dispatch = useDispatch<AppDispath>();

    const tags = getTagList(post.tag);

    const onClick = (tag: string) => {
        console.log(postid)
        const args: TagDataType = {
            postid,
            tag,
        }
        dispatch(updateTag(args));
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