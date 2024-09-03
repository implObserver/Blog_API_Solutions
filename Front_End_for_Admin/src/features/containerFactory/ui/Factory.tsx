import { Preview } from "../components/preview";
import { Text } from "../components/text";
import { Title } from "../components/title";

import { useElementContext } from "@/entities/element";

export const Factory = () => {
    const context = useElementContext();
    const type = context.elementContext.getType();
    if (type === "text") {
        return (
            <Text></Text>
        )
    }
    if (type.includes('title')) {
        return (
            <Title></Title>
        )
    }
    if (type.includes("view")) {
        return (
            <Preview></Preview>
        )
    }
}