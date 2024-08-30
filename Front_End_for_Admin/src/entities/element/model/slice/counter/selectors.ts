import { RootState } from "@/app/model/store/Store";

export const selectCounter = (state: RootState) => state.counter;