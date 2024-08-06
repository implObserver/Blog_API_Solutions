import { ClickToAddElement } from "@/features/clickToAddElement";
import { ClickToRemoveElement } from "@/features/clickToRemoveElement";
import { Factory } from "@/features/containerFactory";
import { Element, ElementContext } from "@/entities/element";
import styles from './styles/Container.module.css'
import { useSelector } from "react-redux";
import { selectFocus } from "@/entities/element/model/slice/focus/selectors";
import { ContainerOS, useContainerContext } from "@/features/containerOS";
import { useCustomState } from "@/shared/lib/hooks/useCustomState";
import { DropdownContext } from "@/shared/ui/dropdownElement";
import { ExternalReset, ExternalResetContext } from "@/features/externalReset";

export const Container = () => {
    const context = useContainerContext();
    const element = context.containerContext.element;
    const model = context.containerContext.model;
    const focus = useSelector(selectFocus);
    const dropdownStatus = useCustomState();

    const elementContext: CanvasElement = {
        featuresContext: {
            panel: {
                features: [
                    <ClickToAddElement></ClickToAddElement>,
                    <ClickToRemoveElement></ClickToRemoveElement>
                ],
            },
            container: {
                features: <Factory></Factory>,
            }
        },
        elementContext: element,
        model,
        isFocus: focus.index === context.containerContext.index,
        dropdownStatus,
    }

    const externalResetContext: ExternalResetContextType = {
        state: dropdownStatus,
        index: `${context.containerContext.index} container`
    }

    const dropdownElementContext: DropdownContextType = {
        state: dropdownStatus.getState(),
        margin: false,
    }

    return (
        <div
            className={styles.container}>
            <ExternalResetContext.Provider value={externalResetContext}>
                <ExternalReset>
                    <DropdownContext.Provider value={dropdownElementContext}>
                        <ElementContext.Provider value={elementContext}>
                            <ContainerOS>
                                <Element></Element>
                            </ContainerOS>
                        </ElementContext.Provider>
                    </DropdownContext.Provider>
                </ExternalReset>
            </ExternalResetContext.Provider>
        </div>
    )
}