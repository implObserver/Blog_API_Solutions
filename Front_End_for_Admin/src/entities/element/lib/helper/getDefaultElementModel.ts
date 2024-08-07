import { elementsToModels } from "./ElementsToModels";
import { Preview, TextArea, MainTitle } from "./modelsOfElements";

const title = MainTitle();
const preview = Preview();
const textArea = TextArea();

export const defaultModels = elementsToModels([title, preview, textArea]);