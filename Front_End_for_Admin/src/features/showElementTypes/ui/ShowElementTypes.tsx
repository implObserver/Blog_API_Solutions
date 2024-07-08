import { Dropdown, DropdownContext } from "@/shared/ui/dropdownElement"
import { useState } from "react";
import styles from './styles/ShowElementTypes.module.css'
import { ElementArea } from "@/shared/ui/elementArea";

export const ShowElementTypes = () => {
    const [isClick, setClick] = useState(false);

    const dropdownElementContext: DropdownContextType = {
        state: isClick,
        margin: true,
    }

    const clickHandle = () => {
        setClick(!isClick);
    }
    return (
        <div onClick={clickHandle}>
            <ElementArea></ElementArea>
            <DropdownContext.Provider value={dropdownElementContext}>
                <Dropdown>
                    <div>adadawdwad</div>
                </Dropdown>
            </DropdownContext.Provider>
        </div>
    )
}