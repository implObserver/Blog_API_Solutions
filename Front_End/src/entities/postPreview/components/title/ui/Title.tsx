import { usePostPreviewContext } from '@/entities/postPreview/lib'
import { PostingDate } from '../components/date'
import { TagOfPost } from '../components/tag'
import { Text } from '../components/text'
import { getAlternative, getClassic, getSlider } from '../lib'
import styles from './styles/Title.module.css'

export const Title = () => {
    const type = usePostPreviewContext().type;

    const style = type === 'slider'
        ? getSlider()
        : type === 'alter'
            ? getAlternative()
            : getClassic();

    return (
        <div className={style.container}>
            <div className={styles.text_wrapper}>
                <Text></Text>
            </div>
            <div className={style.info}>
                <PostingDate></PostingDate>
                <TagOfPost></TagOfPost>
            </div>
        </div>
    )
}