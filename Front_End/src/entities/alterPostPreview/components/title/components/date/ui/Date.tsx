import { useAlterPostPreviewContext } from "@/entities/alterPostPreview/lib/context/Context";
import { usePostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { getFormattedDate } from "@/shared/lib";

export const PostingDate = () => {
    const context = useAlterPostPreviewContext();
    const postingDate = new Date(context.post.postingDate);

    const formattedDate = getFormattedDate(postingDate);
    return (
        <div>
            {formattedDate}
        </div>
    )
}