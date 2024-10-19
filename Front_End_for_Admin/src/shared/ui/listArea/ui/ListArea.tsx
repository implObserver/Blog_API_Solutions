import styles from './styles/Input.module.css'
import { Strong } from '../components/strong';
import { Body } from '../components/body';

export const ListArea = () => {
    return (
        <li key={Math.random()}>
            <div className={styles.container}>
                <Strong></Strong>
                <Body></Body>
            </div>
        </li>
    )
}