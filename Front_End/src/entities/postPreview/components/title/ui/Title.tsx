import { usePostPreviewContext } from '@/entities/postPreview/lib'
import { PostingDate } from '../components/date'
import { TagOfPost } from '../components/tag'
import { Text } from '../components/text'
import { getAlternative, getClassic, getSlider } from '../lib'

export const Title = () => {
    const type = usePostPreviewContext().type;

    const style = type === 'slider'
        ? getSlider()
        : type === 'alter'
            ? getAlternative()
            : getClassic();

    return (
        <div className={style.container}>
            <div>
                <Text></Text>
            </div>
            <div className={style.info}>
                <PostingDate></PostingDate>
                <TagOfPost></TagOfPost>
            </div>
        </div>
    )
}