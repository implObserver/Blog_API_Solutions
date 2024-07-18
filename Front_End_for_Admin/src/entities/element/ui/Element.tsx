import { Wrapper } from '../components/wrapper'
import { Panel } from '../components/panel'
import styles from './styles/Element.module.css'

export const Element = () => {
    return (
        <div className={styles.element}>
            <Panel></Panel>
            <Wrapper></Wrapper>
        </div>
    )
}