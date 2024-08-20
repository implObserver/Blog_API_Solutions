import { useElementContext } from "@/entities/element";
import { PlusButton } from "@/shared/ui/plusButton"

export const ClickToAddElement = () => {
    const context = useElementContext();

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        context.dropdownStatus.toggle();
    }

    return (
        <div onMouseDown={clickHandle}>
            <PlusButton></PlusButton>
        </div>
    )
}