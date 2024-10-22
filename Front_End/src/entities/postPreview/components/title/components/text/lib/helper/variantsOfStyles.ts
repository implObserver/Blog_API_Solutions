import styles from '../../ui/styles/Text.module.css'

export const getClassic = () => {
    const classicStyle = {
        title: styles.title_classic,
        link: styles.link_classic,
    }
    return classicStyle;
}

export const getAlternative = () => {
    const alterStyle = {
        title: styles.title_alter,
        link: styles.link_alter,
    }
    return alterStyle;
}