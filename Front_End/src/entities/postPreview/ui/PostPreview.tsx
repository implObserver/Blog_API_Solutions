import { Preview } from "../components/preview"
import { Title } from "../components/title"
import { getAlternative, getClassic, getSlider, usePostPreviewContext } from "../lib";

export const PostPreview = () => {
    const type = usePostPreviewContext().type;

    const style = type === 'slider'
        ? getSlider()
        : type === 'alter'
            ? getAlternative()
            : getClassic();

    return (
        <div className={style.container}>
            <Preview></Preview>
            <Title></Title>
        </div>
    )
}