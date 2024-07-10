import { useElementContext } from "@/entities/element/lib/context/Context";
import styles from './styles/Panel.module.css'

export const Panel = () => {
    const context = useElementContext();
    const children = context.panel.children;

    const fill = () => {
        return children.map((children: React.ReactElement, index) => {
            return (
                <div key={index}>
                    {children}
                </div>
            )
        })
    }

    return (
        <div className={`${styles.panel} ${context.panel.visible ? '' : styles.hidden}`}>
            {fill()}
        </div>
    )
}