import { Element, ElementNodeContext } from "@/shared/ui/element";
import { useState } from "react"

export const ElementsContainer = () => {
    const [elements, setElements] = useState([<Element></Element>]);

    const fill = () => {
        return elements.map((element, index) => {
            const elementContext: ElementNodeContextType = {
                setElements,
                elements,
                index
            }
            return (
                <div key={index}>
                    <ElementNodeContext.Provider value={elementContext}>
                        {element}
                    </ElementNodeContext.Provider>
                </div>
            )
        })
    }

    return (
        <div>
            {fill()}
        </div>
    )
}