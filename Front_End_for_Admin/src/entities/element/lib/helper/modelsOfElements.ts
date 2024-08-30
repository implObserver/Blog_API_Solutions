import { store } from "@/app/model/store/Store";
import { useLocalStorage } from "@/shared/lib/hooks/useLocalStorage";
import { prototype } from "events";
import { counterActions } from "../../model/slice/counter/slice";

const Element = (id: number) => {
    const getId = () => {
        return id;
    }
    return { getId }
}

const Image = (id: number) => {
    const element = Element(id);
    const image = ImageUrl();

    return Object.assign(image, element)
}

export const ImageArea = (id: number) => {
    const prototype = Image(id);
    const visible = true;
    const getType = () => {
        return 'view';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

export const Preview = (id: number) => {
    const prototype = Image(id);
    const visible = false;
    const getType = () => {
        return 'preview';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

const Text = (id: number) => {
    const element = Element(id);
    const value = Value();
    return Object.assign(value, element)
}

export const TextArea = (id: number) => {
    const prototype = Text(id);
    const visible = true;
    const getType = () => {
        return 'text';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

export const MainTitle = (id: number) => {
    const prototype = Text(id);
    const visible = false;
    const fontSize = 1;
    const getType = () => {
        return 'main_title';
    }
    const getVisible = () => {
        return visible;
    }
    const getFontSize = () => {
        return fontSize;
    }
    return Object.assign(prototype, { getType, getVisible, getFontSize })
}

export const Title = (id: number) => {
    const prototype = Text(id);
    const visible = true;
    const fontSize = 3;
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

const Value = () => {
    let value = '';

    const setValue = (val: string) => {
        value = val;
    }

    const getValue = () => {
        return value;
    }

    return { setValue, getValue };
}

const ImageUrl = () => {
    let url = '';

    const setUrl = (val: string) => {
        url = val;
    }

    const getUrl = () => {
        return url;
    }

    return { setUrl, getUrl };
}