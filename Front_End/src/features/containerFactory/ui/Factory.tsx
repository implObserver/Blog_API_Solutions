import { Code } from "../components/code";
import { ListElement } from "../components/listElement";
import { ListHeader } from "../components/listHeader";
import { Preview } from "../components/preview";
import { Text } from "../components/text";
import { Title } from "../components/title";
import { useElementContext } from "@/entities/element";

export const Factory = () => {
    const { model: elementContext }: CanvasElement = useElementContext();
    const type = elementContext.type;

    const componentMap = {
        text: <Text />,
        title: <Title />,
        list_header: <ListHeader />,
        list_element: <ListElement />,
        code: <Code />,
    };

    if (type.includes('title')) {
        return <Title />;
    }
    if (type.includes('view')) {
        return <Preview />;
    }

    return componentMap[type] || null;
};
