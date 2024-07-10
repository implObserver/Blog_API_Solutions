import styles from './styles/Body.module.css'
import { Element, ElementContext } from '@/entities/element'
import { ClickToAddElement } from '@/features/clickToAddElement'
import { ClickToRemoveElement } from '@/features/clickToRemoveElement'
import { Factory, FactoryContext } from '@/features/containerFactory'
import { TextArea } from '@/shared/ui/textArea'
import { useState } from 'react'

export const ElementsContainer = () => {
    const [elements, setElements] = useState([<Element></Element>]);

    const fill = () => {
        return elements.map((element, index) => {
            const factoryContext: FactoryContextType = {
                type: 'title',
                hNum: 'h3',
            }
            const elementContext: ElementContextType = {
                panel: {
                    visible: true,
                    children: [<ClickToAddElement></ClickToAddElement>,
                    <ClickToRemoveElement></ClickToRemoveElement>],
                },
                container: {
                    children: <Factory></Factory>,
                },
            }
            return (
                <div key={index}>
                    <ElementContext.Provider value={elementContext}>
                        <FactoryContext.Provider value={factoryContext}>
                            {element}
                        </FactoryContext.Provider>
                    </ElementContext.Provider>
                </div>
            )
        })
    }
    return (
        <div className={styles.body}>
            {fill()}
        </div>
    )
}