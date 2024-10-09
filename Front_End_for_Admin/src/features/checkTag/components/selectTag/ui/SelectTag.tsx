import { useParams } from "react-router-dom";
import { getTagList } from "../lib/helper/getTagList"
import { useDispatch, useSelector } from "react-redux";
import { selectUserServices, servicesActions } from "@/entities/user";
import { Tag, TagContext } from "@/shared/ui/tag";
import { AppDispath } from "@/app/model/store/Store";
import { updateTag } from "@/entities/user/model/slice/services/thunks/update/updateTag";
import styles from './styles/SelectTag.module.css'

export const SelectTag = () => {
    const params = useParams();
    const post_id = parseInt(params.postid);
    const service = useSelector(selectUserServices);
    const user = service.user;
    const posts = user.posts;
    const post = posts.find(post => post.id === post_id);
    const dispatch = useDispatch<AppDispath>();

    if (!post) {
        return (
            <div>Нет доступа или поста не существует</div>
        )
    }

    const tags = getTagList(post.tag);

    const onClick = (tag: string) => {
        console.log(post_id)
        const args: TagDataType = {
            post_id,
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