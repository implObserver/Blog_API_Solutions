import { elementsToModels } from "./ElementsToModels";
import { Preview, TextArea, Title } from "./ElementValue";

const title = Title(1);
const preview = Preview();
const textArea = TextArea();

export const defaultModels = elementsToModels([title, preview, textArea]);