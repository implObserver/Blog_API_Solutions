import { Add } from "../components/add"
import { Focus } from "../components/focus"
import { Remove } from "../components/remove"
import { Dropdown } from "@/shared/ui/dropdownElement";
import { useCustomState } from "@/shared/lib";
import { ElementList } from "@/entities/elementList";
import { EmptyContext } from "../lib";

export const ContainerOS = ({ children }) => {
    const isEmpty = useCustomState(false);
    return (
        <>
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
        </>

    )
}