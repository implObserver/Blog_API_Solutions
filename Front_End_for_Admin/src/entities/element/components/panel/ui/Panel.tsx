import { useElementContext } from "@/entities/element/lib/context/Context";
import styles from './styles/Panel.module.css'

export const Panel = () => {
    const context = useElementContext();
    const features = context.featuresContext.panel.features;
    console.log(context)
    const fill = () => {
        return features.map((feature: React.ReactElement, index) => {
            return (
                <div key={index}>
                    {feature}
                </div>
            )
        })
    }

    return (
        <div 
        className={`${styles.panel} 
        ${context.modelContext.panel.visible ? '' : styles.hidden}`}>
            {fill()}
        </div>
    )
}