import { Preview } from "../components/preview"
import { Title } from "../components/title"
import styles from './styles/PostPreview.module.css'

export const AlterPostPreview = () => {
    return (
        <div className={styles.container}>
            <Preview></Preview>
            <Title></Title>
        </div>
    )
}