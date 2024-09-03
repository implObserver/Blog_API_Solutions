import { RootState } from "@/app/model/store/Store";

export const selectLocalPosts = (state: RootState) => state.posts;