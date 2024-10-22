import { PostPreview, PostPreviewContext } from "@/entities/postPreview";
import { PostFilterContext, PostsFilter } from "@/features/postsFilter";
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
        </>,
        type: 'slider',
    };
    return (
        <div>
            <PostPreviewContext.Provider value={postPreviewContext} key={post.id}>
                <PostPreview />
            </PostPreviewContext.Provider>
        </div>
    )
}