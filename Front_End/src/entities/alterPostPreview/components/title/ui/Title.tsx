import { PostingDate } from '../components/date'
import { TagOfPost } from '../components/tag'
import { Text } from '../components/text'
import styles from './styles/Title.module.css'

export const Title = () => {
    return (
        <div className={styles.container}>
                <div>
                    <Text></Text>
                </div>
                <div className={styles.info}>
                    <PostingDate></PostingDate>
                    <TagOfPost></TagOfPost>
                </div>
        </div>
    )
}