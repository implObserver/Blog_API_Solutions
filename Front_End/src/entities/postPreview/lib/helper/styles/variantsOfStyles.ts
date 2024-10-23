import styles from '../../../ui/styles/PostPreview.module.css'

export const getClassic = () => {
    const classicStyle = {
        container: styles.container_classic,
    }
    return classicStyle;
}

export const getAlternative = () => {
    const alterStyle = {
        container: styles.container_alter,
    }
    return alterStyle;
}

export const getSlider = () => {
    const sliderStyle = {
        container: styles.container_slider,
    }
    return sliderStyle;
}