import { Dropdown, DropdownContext } from "@/shared/ui/dropdownElement";
import { Tag, TagContext } from "@/shared/ui/tag"
import { useSelector } from "react-redux";
import { SelectTag } from "../components/selectTag/ui/SelectTag";
import { useCustomState } from "@/shared/lib";
import { ExternalReset, ExternalResetContext } from "@/shared/ui/externalReset";
import { selectOpenedPost } from "@/entities/postState/model/slice/openedPost/selectors";

export const CheckTag = () => {
    const click = useCustomState(false);
    const post = useSelector(selectOpenedPost).openedPost;

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