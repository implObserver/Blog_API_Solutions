import styles from '../../ui/styles/Preview.module.css'

export const getClassic = () => {
    const classicStyle = {
        container: styles.container_classic,
        image: styles.image_classic,
        link: styles.link_classic,
    }
    return classicStyle;
}

export const getAlternative = () => {
    const alterStyle = {
        container: styles.container_alter,
        image: styles.image_alter,
        link: styles.link_alter,
    }
    return alterStyle;
}

export const getSlider = () => {
    const sliderStyle = {
        container: styles.container_slider,
        image: styles.image_slider,
        link: styles.link_slider,
    }
    return sliderStyle;
}