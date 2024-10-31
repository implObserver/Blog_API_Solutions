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
    const { dropdownState: dropdownStatus, index } = useElementContext();

    const externalResetContext = {
        state: dropdownStatus,
        index: `${index} container`,
    };

    return (
        <div>
            <EmptyContext.Provider value={isEmpty}>
                <ExternalResetContext.Provider value={externalResetContext}>
                    <ExternalReset>
                        <Dropdown>
                            <ElementList />
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
        </div>
    );
};