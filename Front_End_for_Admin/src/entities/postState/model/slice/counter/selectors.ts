import { RootState } from "@/app/model/store/Store";
import { createSelector } from "@reduxjs/toolkit";

const getCounterState = (state: RootState) => state.counter;

// Мемоизированный селектор
export const selectCounter = createSelector(
    [getCounterState],
    (counterState) => counterState.count // измените 'value' на соответствующее поле вашего состояния
);