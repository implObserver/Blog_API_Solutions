import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage"
import { defaultElements } from "../../lib/helper/getDefaultElementModel";

export const loadElements = () => {
    const { getItem } = useLocalStorage('post_constructor_elements');
    const result = getItem();
    return result ? result : defaultElements;
}

const title: ElementModel = {
    index: 0,
    panel: {
        visible: false,
    },
    container: {
        type: 'title',
        nNum: 'h1',
        value: '',
    }
}

const preview: ElementModel = {
    index: 1,
    panel: {
        visible: false,
    },
    container: {
        type: 'preview',
        nNum: 'none',
        value: '',
    }
}