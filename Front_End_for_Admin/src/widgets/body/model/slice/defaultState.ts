import { loadElements } from "../../api/localStorage/loadElements";

export const initialState: Elements = {
    elements: loadElements(),
}