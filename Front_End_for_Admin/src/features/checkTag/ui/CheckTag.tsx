import { TagList } from "@/entities/tagList/ui/TagList";
import { selectUserServices } from "@/entities/user";
import { Dropdown, DropdownContext } from "@/shared/ui/dropdownElement";
import { Tag, TagContext } from "@/shared/ui/tag"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SelectTag } from "../components/selectTag/ui/SelectTag";

export const CheckTag = () => {
    const [click, setClick] = useState(false);
    const params = useParams();
    const post_id = parseInt(params.postid);
    const service = useSelector(selectUserServices);
    const user = service.user;
    const posts = user.posts;
    const post = posts.find(post => post.id === post_id);
    if (!post) {
        return (
            <div>Нет доступа или поста не существует</div>
        )
    }
    const dropdownContext: DropdownContextType = {
        margin: false,
        state: click,
    }

    const onClick = () => {
        setClick(!click);
    }

    return (
        <div onClick={onClick}>
            <TagContext.Provider value={post.tag}>
                <Tag></Tag>
            </TagContext.Provider>
            <DropdownContext.Provider value={dropdownContext}>
                <Dropdown>
                    <SelectTag></SelectTag>
                </Dropdown>
            </DropdownContext.Provider>
        </div>
    )
}