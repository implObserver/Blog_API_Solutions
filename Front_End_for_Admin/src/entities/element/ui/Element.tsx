import { Container } from '../components/container'
import { Panel } from '../components/panel'
import styles from './styles/Element.module.css'

export const Element = () => {
    return (
        <div className={styles.element}>
            <Panel></Panel>
            <Container></Container>
        </div>
    )
}