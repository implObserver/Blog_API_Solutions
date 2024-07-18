import { useFactoryContext } from "../lib/context/Context"
import { Text } from "../components/text";
import { Title } from "../components/title";
import { useElementContext } from "@/entities/element/lib/context/Context";
import { Preview } from "../components/preview/ui/Preview";
import { store } from "@/app/model/store/Store";
import { elementsActions } from "@/entities/element";

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
    if (type === "image") {
        return (
            <div></div>
        )
    }
    if (type === "preview") {
        return (
            <Preview></Preview>
        )
    }
}