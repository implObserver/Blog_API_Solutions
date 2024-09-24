import { useElementContext } from "@/entities/element";
import { PlusButton } from "@/shared/ui/plusButton"

export const ClickToAddElement = () => {
    const context = useElementContext();
    
    const clickHandle = () => {
        context.dropdownStatus.toggle();
    }

    return (
        <div onMouseDown={clickHandle}>
            <PlusButton></PlusButton>
        </div>
    )
}