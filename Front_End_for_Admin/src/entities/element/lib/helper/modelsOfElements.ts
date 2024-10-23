import { getCounter } from "@/shared/lib";

const CreateElement = (id?: number) => {
    const defaultId = id === undefined ? getCounter() : id;
    const getId = () => {
        return defaultId;
    }
    return { getId }
}

const createValueManager = () => {
    let value = '';

    const setValue = (val: string) => {
        value = val;
    }

    const getValue = () => {
        return value;
    }

    return { setValue, getValue };
}

const createImageUrlManager = () => {
    let url = '';

    const setImageUrl = (val: string) => {
        url = val;
    }

    const getImageUrl = () => {
        return url;
    }

    return { setImageUrl, getImageUrl };
}

const Version = (beta: string) => {
    let version = beta;

    const updateVersion = (newVersion: string) => {
        version = newVersion;
    }

    const getVersion = () => {
        return version;
    }

    return { updateVersion, getVersion };
}

const createImageElement = (id?: number) => {
    const element = CreateElement(id);
    const image = createImageUrlManager();
    const version = Version(image.getImageUrl())
    return Object.assign(image, element, version)
}

const createTextElement = (id?: number) => {
    const element = CreateElement(id);
    const value = createValueManager();
    return Object.assign(value, element)
}

const createListTextElement = (id?: number) => {
    const element = CreateElement(id);
    const strong = createValueManager();
    const value = createValueManager();
    const getStrongText = () => {
        return strong.getValue();
    }
    const setStrongText = (value: string) => {
        return strong.setValue(value);
    }
    return Object.assign(value, element, { getStrongText, setStrongText });
}

export const createImageArea = (id?: number) => {
    const prototype = createImageElement(id);
    const visible = true;
    const getType = () => {
        return 'view';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

export const createPreview = (id?: number) => {
    const prototype = createImageElement(id);
    const visible = false;
    const getType = () => {
        return 'preview';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

export const createCodeArea = (id?: number) => {
    const prototype = createTextElement(id);
    const visible = true;
    const getType = () => {
        return 'code';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

export const createTextArea = (id?: number) => {
    const prototype = createTextElement(id);
    const visible = true;
    const getType = () => {
        return 'text';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

export const createListHeader = (id?: number) => {
    const prototype = createTextElement(id);
    const visible = true;
    const getType = () => {
        return 'list_header';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

export const createListElement = (id?: number) => {
    const prototype = createListTextElement(id);
    const visible = true;
    const getType = () => {
        return 'list_element';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

export const createMainTitle = (id?: number) => {
    const prototype = createTextElement(id);
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

export const createTitle = (id?: number) => {
    const prototype = createTextElement(id);
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