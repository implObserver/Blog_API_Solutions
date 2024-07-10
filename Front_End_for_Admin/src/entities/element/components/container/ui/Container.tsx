import { useElementContext } from "@/entities/element/lib/context/Context";
import styles from './styles/Container.module.css'

export const Container = () => {
    const context = useElementContext();
    console.log(context.container.children)
    return (
        <div className={styles.container}>
            {context.container.children}
        </div>
    )
}