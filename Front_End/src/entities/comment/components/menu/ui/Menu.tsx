import { useElementContext } from "@/entities/element";
import { useCustomState } from "@/shared/lib";
import { ButtonForActionMenu } from "@/shared/ui/buttonForActionMenu/ui/ButtonForActionMenu"
import { useCommentContext } from "@/shared/ui/comment/lib/context/Context";
import { Dropdown, DropdownContext } from "@/shared/ui/dropdownElement"
import { ExternalReset, ExternalResetContext } from "@/shared/ui/externalReset"
import styles from './styles/Menu.module.css'

export const Menu = () => {

    const update = useCustomState();
    const context = useCommentContext();
    const features = context.features;
    const externalResetContext: ExternalResetContextType = {
        state: update,
        index: `${context.comment.id} container`,
    }

    const dropdownContext: DropdownContextType = {
        state: update.getState(),
        margin: false,
    }

    const onClick = () => {
        update.toggle();
    }

    const fill = () => {
        return features.map((feature, index) => {
            return (
                <div key={index}>
                    {feature}
                </div>
            )
        })
    };

    return (
        <div className={styles.menu} onClick={onClick}>
            <ExternalResetContext.Provider value={externalResetContext}>
                <ExternalReset>
                    <ButtonForActionMenu></ButtonForActionMenu>
                    <DropdownContext.Provider value={dropdownContext}>
                        <Dropdown>
                            <div className={styles.container}>
                                {fill()}
                            </div>
                        </Dropdown>
                    </DropdownContext.Provider>
                </ExternalReset>
            </ExternalResetContext.Provider>
        </div >
    )
}