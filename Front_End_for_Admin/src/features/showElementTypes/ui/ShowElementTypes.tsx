import { Dropdown, DropdownContext } from "@/shared/ui/dropdownElement"
import { useState } from "react";
import styles from './styles/ShowElementTypes.module.css'
import { ElementArea } from "@/shared/ui/elementArea";

export const ShowElementTypes = ({ children }) => {
    const [isClick, setClick] = useState(false);



    const clickHandle = () => {
        setClick(!isClick);
    }
    return (
        <div onClick={clickHandle}>
            {children}

            <Dropdown>
                <div>adadawdwad</div>
            </Dropdown>

        </div>
    )
}