import { useFactoryContext } from "../lib/context/Context"
import { Text } from "../components/text";
import { Title } from "../components/title";

export const Factory = () => {
    const context = useFactoryContext();
    const type = context.type;

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
}