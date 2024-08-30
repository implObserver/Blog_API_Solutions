import { defaultModels } from "@/entities/element/lib/helper/getDefaultElementModel";

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
    models: defaultModels,
}