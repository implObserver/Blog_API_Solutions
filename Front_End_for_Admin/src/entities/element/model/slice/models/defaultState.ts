import { loadModels } from "../../../api/localStorage/loadModels";

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

export const initialState: Models = {
    models: loadModels(),
}