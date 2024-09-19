import styles from './styles/Plus.module.css'

export const Plus = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.plus}
            viewBox="0 -960 960 960"
            >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
    )
}