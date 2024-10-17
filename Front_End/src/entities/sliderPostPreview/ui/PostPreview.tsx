import { Preview } from "../components/preview"
import { Title } from "../components/title"
import { usePostPreviewContext } from "../lib/context/Context"
import styles from './styles/PostPreview.module.css'

export const SliderPostPreview = () => {
    return (
        <div className={styles.container}>
            <Preview></Preview>
            <Title></Title>
        </div>
    )
}