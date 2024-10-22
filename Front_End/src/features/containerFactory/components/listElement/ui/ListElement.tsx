import { useElementContext } from "@/entities/element";
import { ListArea, ListAreaContext } from "@/shared/ui/listArea";
import styles from './styles/ListElement.module.css'

export const ListElement = () => {
    const context = useElementContext();

    const textAreaContext: TextAreaContextType = {
        placeholder: 'Add text',
        strongPlaceholder: 'Strong',
        value: context.model,
        maxLength: -1,
    }

    return (
        <div className={styles.list_element}>
            <ul className={styles.ul}>
                <ListAreaContext.Provider value={textAreaContext}>
                    <ListArea></ListArea>
                </ListAreaContext.Provider>
            </ul>
        </div>
    )
}