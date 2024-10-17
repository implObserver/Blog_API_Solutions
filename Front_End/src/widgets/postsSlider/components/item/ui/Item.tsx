import { PostPreview } from "@/entities/postPreview";
import { PostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { SliderPostPreview } from "@/entities/sliderPostPreview";
import { PostFilterContext } from "@/features/postsFilter/lib/context/Context";
import { PostsFilter } from "@/features/postsFilter/ui/PostsFilter";
import { Tag } from "@/shared/ui/tag";

export const Item = ({ post }) => {
    const postFilterContext: PostFilterType = {
        tag: post.tag,
        children: <Tag></Tag>,
    }
    const postPreviewContext: PostPreviewContextType = {
        post,
        tag: <>
            <PostFilterContext.Provider value={postFilterContext}>
                <PostsFilter></PostsFilter>
            </PostFilterContext.Provider>
        </>
    };
    return (
        <div>
            <PostPreviewContext.Provider value={postPreviewContext} key={post.id}>
                <SliderPostPreview />
            </PostPreviewContext.Provider>
        </div>
    )
}