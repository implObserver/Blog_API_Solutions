import { AppDispath } from "@/app/model/store/Store";
import { PostPreview } from "@/entities/postPreview";
import { PostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import { selectTag } from "@/entities/tag";
import { postsActions } from "@/entities/user";
import { selectPosts } from "@/entities/user/model/slice/posts/selectors";
import { getAllPosts } from "@/entities/user/model/slice/posts/thunks/get/getAllPosts";
import { PostFilterContext } from "@/features/postsFilter/lib/context/Context";
import { PostsFilter } from "@/features/postsFilter/ui/PostsFilter";
import { Line } from "@/shared/ui/line";
import { Tag } from "@/shared/ui/tag";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './styles/Posts.module.css';
import { getPaginationPosts } from "@/entities/user/model/slice/posts/thunks/get/getPaginationPost";

export const Pposts = () => {
    const dispatch = useDispatch<AppDispath>();
    const tag = useSelector(selectTag).tag;
    const postsService = useSelector(selectPosts);
    const posts = postsService.posts;
    console.log(postsService)
    const currentPage = postsService.currentPage;
    const totalPages = postsService.totalPages;
    const loadPosts = async () => {
        const data: PaginationData = {
            page: currentPage,
        }
        dispatch(getPaginationPosts(data));
    };

    useEffect(() => {
        loadPosts();
    }, [currentPage]);

    const loadMorePostsUp = () => {
        console.log(postsService.currentPage, totalPages)
        if (currentPage < totalPages) {
            dispatch(postsActions.setCurrentPage(currentPage + 1)); // Увеличиваем номер текущей страницы
        }
    };

    const loadMorePostsBack = () => {
        console.log(postsService.currentPage, totalPages)
        if (currentPage > 1) {
            dispatch(postsActions.setCurrentPage(currentPage - 1)); // Увеличиваем номер текущей страницы
        }
    };

    const fill = () => {
        let counter = 0;
        return posts.map((post, index) => {
            if (tag === post.tag || tag === 'All') {
                ++counter;
                if (counter > 3) {
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
                        <PostPreviewContext.Provider value={postPreviewContext} key={post.id}>
                            <PostPreview />
                        </PostPreviewContext.Provider>
                    );
                }
            }
        });
    };

    return (
        <div>
            <div>
                <Line text={'Recent Posts'}></Line>
            </div>
            <div className={styles.container}>
                {fill()}
            </div>
            <div className={styles.pagination}>
                <button className={styles.pagination_btn} onClick={loadMorePostsBack} disabled={currentPage === 1}>
                    назад
                </button>
                <span>{currentPage} из {totalPages}</span>
                <button className={styles.pagination_btn} onClick={loadMorePostsUp} disabled={currentPage === totalPages}>
                    вперед
                </button>
            </div>
        </div >
    )
};