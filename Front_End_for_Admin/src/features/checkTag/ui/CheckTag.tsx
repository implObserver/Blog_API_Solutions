import { selectUserServices } from "@/entities/user";
import { Dropdown, DropdownContext } from "@/shared/ui/dropdownElement";
import { Tag, TagContext } from "@/shared/ui/tag"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SelectTag } from "../components/selectTag/ui/SelectTag";
import { useCustomState } from "@/shared/lib";
import { ExternalReset, ExternalResetContext } from "@/shared/ui/externalReset";

export const CheckTag = () => {
    const click = useCustomState(false);
    const params = useParams();
    const post_id = parseInt(params.postid);
    const service = useSelector(selectUserServices);
    const user = service.user;
    const posts = user.posts;
    console.log(posts)
    const post = posts.find(post => post.id === post_id);
    if (!post) {
        return (
            <div>Нет доступа или поста не существует</div>
        )
    }
    const dropdownContext: DropdownContextType = {
        margin: false,
        state: click.getState(),
    }

    const externalResetContext: ExternalResetContextType = {
        index: 'tags_reset',
        state: click,
    }

    const onClick = () => {
        click.toggle();
    }

    return (
        <div onClick={onClick}>
            <ExternalResetContext.Provider value={externalResetContext}>
                <ExternalReset>
                    <TagContext.Provider value={post.tag}>
                        <Tag></Tag>
                    </TagContext.Provider>
                    <DropdownContext.Provider value={dropdownContext}>
                        <Dropdown>
                            <SelectTag></SelectTag>
                        </Dropdown>
                    </DropdownContext.Provider>
                </ExternalReset>
            </ExternalResetContext.Provider>
        </div>
    )
}