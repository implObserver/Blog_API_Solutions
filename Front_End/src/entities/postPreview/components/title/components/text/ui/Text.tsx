import { Link } from "react-router-dom";
import { getAlternative, getClassic } from "../lib/helper/variantsOfStyles";
import { usePostPreviewContext } from "@/entities/postPreview/lib";

export const Text = () => {
    const context = usePostPreviewContext();
    const type = context.type;
    const post = context.post;

    const style = type === 'alter'
        ? getAlternative()
        : getClassic();

    return (
        <Link
            key={`container_${post.id}`}
            className={style.link}
            to={`/post/${post.id}`}
            state={post.id}
        >
            <div className={style.title}>
                {context.post.models[0].value}
            </div>
        </Link>
    )
}