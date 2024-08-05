import { useElementContext } from '@/entities/element/lib/context/Context';
import styles from './styles/Container.module.css'

export const Wrapper = () => {
    const context = useElementContext();
    return (
        <div className={styles.container}>
            {context.featuresContext.container.features}
        </div>
    )
}