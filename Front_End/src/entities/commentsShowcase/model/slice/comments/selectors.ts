import { RootState } from "@/app/model/store/Store";

export const selectComments = (state: RootState) => state.comments;