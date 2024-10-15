import { RootState } from "@/app/model/store/Store";

export const selectPosts = (state: RootState) => state.userPosts;