import { usePostPreviewContext } from "@/entities/postPreview/lib";
import { getFormattedDate } from "@/shared/lib";

export const PostingDate = () => {
    const context = usePostPreviewContext();
    const postingDate = new Date(context.post.postingDate);

    const formattedDate = getFormattedDate(postingDate);
    return (
        <div>
            {formattedDate}
        </div>
    )
}