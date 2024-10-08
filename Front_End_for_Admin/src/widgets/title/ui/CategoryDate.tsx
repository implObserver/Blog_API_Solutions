import { TitleHeader } from '@/entities/titleHeader'
import styles from './styles/Title.module.css'
import { CheckTag } from '@/features/checkTag'
import { Dropdown, DropdownContext } from '@/shared/ui/dropdownElement'
import { useState } from 'react'
import { ElementList } from '@/entities/elementList'
import { Tags } from '../components/tags/ui/Tags'
import { ExternalReset } from '@/shared/ui/externalReset'

export const CategoryDate = () => {
    return (
        <div className={styles.title}>
            <TitleHeader>
                <Tags></Tags>
            </TitleHeader>
        </div >
    )
}