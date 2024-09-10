import { RootState } from "@/app/model/store/Store";

export const selectSnapshot = (state: RootState) => state.snapshot;