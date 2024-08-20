import { RootState } from "@/app/model/store/Store";

export const selectUser = (state: RootState) => state.user;