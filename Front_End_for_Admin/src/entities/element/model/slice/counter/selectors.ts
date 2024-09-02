import { RootState } from "@/app/model/store/Store";
import { createSelector } from "@reduxjs/toolkit";

export const selectCounter = (state: RootState) => state.counter;

