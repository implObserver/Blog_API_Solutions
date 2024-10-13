import { Body } from "../components/body/ui/Body"
import { Madeby } from "../components/madeby/ui/Madeby"
import styles from './styles/Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.container}>
            <Body></Body>
            <Madeby></Madeby>
        </div>
    )
}