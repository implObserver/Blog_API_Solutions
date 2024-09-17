import { useEffect, useRef } from "react"
import { Code } from "../components/code/ui/Code"
import { Image } from "../components/image/ui/Image"
import { List } from "../components/list/ui/List"
import { Text } from "../components/text/ui/Text"
import { Title } from "../components/title/ui/Title"
import styles from './styles/ElementList.module.css'

export const ElementList = () => {
    return (
        <div className={styles.list}>
            <List></List>
            <Title></Title>
            <Text></Text>
            <Image></Image>
            <Code></Code>
        </div>
    )
}