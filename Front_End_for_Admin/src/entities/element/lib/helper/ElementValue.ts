import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage";
import { prototype } from "events";

const { getItem, setItem } = useLocalStorage('post_constructor_id_generator');
console.log('ups')
const counter = getItem();

if (!counter) {
    setItem(0);
}

const Element = () => {
    let id = getItem();
    setItem(id + 1);
    console.log('ELEMENT')
    const getId = () => {
        return id;
    }

    const setId = (val: number) => {
        id = val;
    }
    return { getId, setId }
}

const Image = () => {
    const element = Element();
    const image = ImageUrl();

    return Object.assign(image, element)
}

export const Preview = () => {
    const prototype = Image();
    const visible = false;
    const getType = () => {
        return 'preview';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

const Text = () => {
    const element = Element();
    const value = Value();
    return Object.assign(value, element)
}

export const TextArea = () => {
    const prototype = Text();
    const visible = true;
    const getType = () => {
        return 'text';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

export const Title = (size: number = 3) => {
    const prototype = Text();
    const visible = false;
    const fontSize = size;
    const getType = () => {
        return 'title';
    }
    const getVisible = () => {
        return visible;
    }
    const getFontSize = () => {
        return fontSize;
    }
    return Object.assign(prototype, { getType, getVisible, getFontSize })
}

export const Value = () => {
    const { setItem, getItem } = useLocalStorage('');
    let value = '';

    const setValue = (val: string) => {
        value = val;
    }

    const getValue = () => {
        return value;
    }

    return { setValue, getValue };
}

export const ImageUrl = () => {
    let url = '';

    const setUrl = (val: string) => {
        url = val;
    }

    const getUrl = () => {
        return url;
    }

    return { setUrl, getUrl };
}