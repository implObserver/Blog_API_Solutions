import { convertElementsToModels } from "./ElementsToModels";
import { createPreview, createTextArea, createMainTitle } from "./modelsOfElements";

const title = createMainTitle();
const preview = createPreview();
const textArea = createTextArea();

export const defaultModels = convertElementsToModels([title, preview, textArea]);