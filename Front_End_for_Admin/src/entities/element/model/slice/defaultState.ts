import { loadElements } from "../../api/localStorage/loadElements";
import { saveElements } from "../../api/localStorage/saveElements";

/*const defaultElement: ElementModel = {
    panel: {
        visible: true,
    },
    container: {
        type: 'text',
        nNum: 'h3',
        value: '',
    }
}

saveElements([defaultElement])

*/

export const initialState: ElementModels = {
    elements: loadElements(),
}