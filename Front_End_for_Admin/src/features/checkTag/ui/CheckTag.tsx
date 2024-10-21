import { Dropdown, DropdownContext } from "@/shared/ui/dropdownElement";
import { Tag, TagContext } from "@/shared/ui/tag"
import { useSelector } from "react-redux";
import { useCustomState } from "@/shared/lib";
import { ExternalReset, ExternalResetContext } from "@/shared/ui/externalReset";
import { SelectTag } from "../components/selectTag";
import { selectOpenedPost } from "@/entities/postState";

export const CheckTag = () => {
    const click = useCustomState(false);
    const post = useSelector(selectOpenedPost).openedPost;

    const dropdownContext: DropdownState = {
        hasMargin: false,
        isOpen: click.getState(),
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