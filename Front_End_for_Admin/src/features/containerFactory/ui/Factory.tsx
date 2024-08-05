import { Text } from "../components/text";
import { Title } from "../components/title";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { Preview } from "../components/preview/ui/Preview";

export const Factory = () => {
    const context = useElementContext();
    const type = context.elementContext.getType();
    if (type === "text") {
        return (
            <Text></Text>
        )
    }
    if (type === "title") {
        return (
            <Title></Title>
        )
    }
    if (type === "preview") {
        return (
            <Preview></Preview>
        )
    }
}