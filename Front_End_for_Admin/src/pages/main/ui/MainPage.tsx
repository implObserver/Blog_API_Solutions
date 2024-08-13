import styles from './styles/MainPage.module.css'
import { Canvas } from '@/widgets/canvas'

import { CategoryDate } from '@/widgets/title'
import { UserForms } from '@/widgets/userForms'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <UserForms></UserForms>
        </div>
    )
}