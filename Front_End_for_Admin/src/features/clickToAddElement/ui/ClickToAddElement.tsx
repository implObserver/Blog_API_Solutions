import { Dropdown, DropdownContext } from "@/shared/ui/dropdownElement"
import { PlusButton } from "@/shared/ui/plusButton"
import styles from './styles/ClickToAddElement.module.css'
import { useCustomState } from "@/shared/lib/hooks/useCustomState";
import { List } from "@/entities/elementList/components/list/ui/List";
import { useElementContext } from "@/entities/element/lib/context/Context";

export const ClickToAddElement = () => {
    const context = useElementContext();

    const dropdownElementContext: DropdownContextType = {
        state: context.dropdownStatus.getState(),
        margin: false,
    }

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        context.dropdownStatus.toggle();
    }

    return (
        <div onMouseDown={clickHandle}>
            <PlusButton></PlusButton>
        </div>
    )
}