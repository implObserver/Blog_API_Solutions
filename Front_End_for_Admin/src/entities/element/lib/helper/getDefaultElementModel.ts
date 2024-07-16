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

const defaultText: ElementModel = {
    index: 2,
    panel: {
        visible: true,
    },
    container: {
        type: 'text',
        nNum: 'none',
        value: '',
    }
}

export const defaultElements = [title, preview, defaultText];