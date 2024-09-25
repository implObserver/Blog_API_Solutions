import { Code } from "../components/code"
import { Title } from "../components/title"
import { Text } from "../components/text"
import { List } from "../components/list"
import { Image } from '../components/image'
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