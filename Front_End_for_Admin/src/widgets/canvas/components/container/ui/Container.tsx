import { AddText, AddTitle, ClickToAddElement } from "@/features/clickToAddElement";
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
import { ShowElementTypes } from "@/features/showElementTypes/ui/ShowElementTypes";
import { ElementListContext } from "@/entities/elementList/lib/context/Context";
import { AddImage } from "@/features/clickToAddElement/components/addIImage/ui/AddImage";

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
        index: context.containerContext.index,
    }

    const externalResetContext: ExternalResetContextType = {
        state: dropdownStatus,
        index: `${context.containerContext.index} container`
    }

    const dropdownElementContext: DropdownContextType = {
        canvas: context.canvasUpdate,
        state: dropdownStatus.getState(),
        margin: false,
    }

    const elementListContext: ElementListContextType = {
        text: <AddText></AddText>,
        title: <AddTitle></AddTitle>,
        image: <AddImage></AddImage>,
    }

    return (
        <div
            className={styles.container}>
            <ExternalResetContext.Provider value={externalResetContext}>
                <ExternalReset>
                    <DropdownContext.Provider value={dropdownElementContext}>
                        <ElementListContext.Provider value={elementListContext}>
                            <ElementContext.Provider value={elementContext}>
                                <ContainerOS>
                                    <Element></Element>
                                </ContainerOS>
                            </ElementContext.Provider>
                        </ElementListContext.Provider>
                    </DropdownContext.Provider>
                </ExternalReset>
            </ExternalResetContext.Provider>
        </div>
    )
}