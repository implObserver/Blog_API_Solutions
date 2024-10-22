import styles from '../../ui/styles/Title.module.css'

export const getClassic = () => {
    const classicStyle = {
        container: styles.container_classic,
        info: styles.info_classic,
        wrapper: styles.wrapper_classic,
    }
    return classicStyle;
}

export const getAlternative = () => {
    const alterStyle = {
        container: styles.container_alter,
        info: styles.info_alter,
        wrapper: styles.wrapper_alter,
    }
    return alterStyle;
}

export const getSlider = () => {
    const sliderStyle = {
        container: styles.container_slider,
        info: styles.info_slider,
        wrapper: styles.wrapper_slider,
    }
    return sliderStyle;
}