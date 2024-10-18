import { RootState } from "@/app/model/store/Store";

export const selectBackups = (state: RootState) => state.backups;