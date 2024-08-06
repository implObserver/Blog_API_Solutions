import { useCustomState } from "@/shared/lib/hooks/useCustomState";
import { Add } from "../components/add"
import { Focus } from "../components/focus"
import { Remove } from "../components/remove"
import { EmptyContext } from "../lib/context/EmptyContext";
import { Dropdown } from "@/shared/ui/dropdownElement";
import { List } from "@/entities/elementList/components/list/ui/List";

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
                <List></List>
            </Dropdown>
        </EmptyContext.Provider>

    )
}