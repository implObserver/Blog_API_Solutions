import { ReadService } from "../../api/api.get"

export const getPosts = async () => {
    try {
        const resp = await ReadService.getAllPosts();
        const posts = resp.data.posts_list;
        return posts;
    } catch (error) {
        return [];
    }
}