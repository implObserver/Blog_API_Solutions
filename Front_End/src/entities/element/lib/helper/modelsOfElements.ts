const Element = (id?: number) => {
    const defaultId = id;
    const getId = () => {
        return defaultId;
    }
    return { getId }
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

    const setImageUrl = (val: string) => {
        url = val;
    }

    const getImageUrl = () => {
        return url;
    }

    return { setImageUrl, getImageUrl };
}

const Version = (beta: number) => {
    let version = beta;

    const updateVersion = (newVersion: number) => {
        version = newVersion;
    }

    const getVersion = () => {
        return version;
    }

    return { updateVersion, getVersion };
}

const Image = (id?: number) => {
    const element = Element(id);
    const image = ImageUrl();
    const version = Version(0);

    return Object.assign(image, element, version)
}

const Text = (id?: number) => {
    const element = Element(id);
    const value = Value();
    return Object.assign(value, element)
}

const ListText = (id?: number) => {
    const element = Element(id);
    const strong = Value();
    const value = Value();
    const getStrong = () => {
        return strong.getValue();
    }
    const setStrong = (value: string) => {
        return strong.setValue(value);
    }
    return Object.assign(value, element, { getStrong, setStrong });
}

export const ImageArea = (id?: number) => {
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

export const Preview = (id?: number) => {
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

export const CodeArea = (id?: number) => {
    const prototype = Text(id);
    const visible = true;
    const getType = () => {
        return 'code';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

export const TextArea = (id?: number) => {
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

export const ListHeader = (id?: number) => {
    const prototype = Text(id);
    const visible = true;
    const getType = () => {
        return 'list_header';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

export const ListElement = (id?: number) => {
    const prototype = ListText(id);
    const visible = true;
    const getType = () => {
        return 'list_element';
    }
    const getVisible = () => {
        return visible;
    }
    return Object.assign(prototype, { getType, getVisible })
}

export const MainTitle = (id?: number) => {
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

export const Title = (id?: number) => {
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