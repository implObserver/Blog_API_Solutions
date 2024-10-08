import { Add } from "../components/add"
import { Focus } from "../components/focus"
import { Remove } from "../components/remove"
import { Dropdown } from "@/shared/ui/dropdownElement";
import { useCustomState } from "@/shared/lib";
import { ElementList } from "@/entities/elementList";
import { EmptyContext } from "../lib";
import { ExternalReset, ExternalResetContext } from "@/shared/ui/externalReset";
import { useElementContext } from "@/entities/element";

export const ContainerOS = ({ children }) => {
    const isEmpty = useCustomState(false);
    const context = useElementContext();

    const externalResetContext = {
        state: context.dropdownStatus,
        index: `${context.index} container`,
    };

    return (
        <>
            <EmptyContext.Provider value={isEmpty}>
                <ExternalResetContext.Provider value={externalResetContext}>
                    <ExternalReset>
                        <Dropdown>
                            <ElementList></ElementList>
                        </Dropdown>
                    </ExternalReset>
                </ExternalResetContext.Provider>
                <Focus>
                    <Add>
                        <Remove>
                            {children}
                        </Remove>
                    </Add>
                </Focus>
            </EmptyContext.Provider>
        </>

    )
}