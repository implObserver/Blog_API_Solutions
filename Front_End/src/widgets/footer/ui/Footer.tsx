import { Body } from '../components/body'
import { Madeby } from '../components/madeby'
import styles from './styles/Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.container}>
            <Body></Body>
            <Madeby></Madeby>
        </div>
    )
}