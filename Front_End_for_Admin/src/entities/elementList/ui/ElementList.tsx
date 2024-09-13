import { Code } from "../components/code/ui/Code"
import { Image } from "../components/image/ui/Image"
import { List } from "../components/list/ui/List"
import { Text } from "../components/text/ui/Text"
import { Title } from "../components/title/ui/Title"

export const ElementList = () => {
    return (
        <div>
            <List></List>
            <Title></Title>
            <Text></Text>
            <Image></Image>
            <Code></Code>
        </div>
    )
}