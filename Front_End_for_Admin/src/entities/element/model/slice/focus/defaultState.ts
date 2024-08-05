import { loadFocus } from "@/entities/element/api/localStorage/loadFocus";

export const initialState: Focus = {
    index: loadFocus(),
}