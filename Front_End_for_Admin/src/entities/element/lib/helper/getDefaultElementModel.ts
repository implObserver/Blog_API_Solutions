import { elementsToModels } from "./ElementsToModels";
import { Preview, TextArea, MainTitle } from "./modelsOfElements";

const title = MainTitle(0);
const preview = Preview(1);
const textArea = TextArea(2);

export const defaultModels = elementsToModels([title, preview, textArea]);