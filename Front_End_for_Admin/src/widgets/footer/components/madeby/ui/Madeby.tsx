import { Link } from "react-router-dom"
import styles from './styles/Madeby.module.css'

export const Madeby = () => {
    return (
        <Link className={styles.container} to='https://github.com/implObserver'>
            Made by Observer
        </Link>
    )
}