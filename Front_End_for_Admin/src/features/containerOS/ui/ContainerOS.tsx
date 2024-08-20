import { Add } from "../components/add"
import { Focus } from "../components/focus"
import { Remove } from "../components/remove"
import { EmptyContext } from "../lib/context/EmptyContext";
import { Dropdown } from "@/shared/ui/dropdownElement";
import { useCustomState } from "@/shared/lib";
import { ElementList } from "@/entities/elementList";

export const ContainerOS = ({ children }) => {
    const isEmpty = useCustomState(false);
    return (
        <EmptyContext.Provider value={isEmpty}>
            <Focus>
                <Add>
                    <Remove>
                        {children}
                    </Remove>
                </Add>
            </Focus>
            <Dropdown>
                <ElementList></ElementList>
            </Dropdown>
        </EmptyContext.Provider>
    )
}