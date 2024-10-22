import { useCustomState } from "@/shared/lib";
import { Dropdown, DropdownContext } from "@/shared/ui/dropdownElement"
import { ExternalReset, ExternalResetContext } from "@/shared/ui/externalReset"
import styles from './styles/Menu.module.css'
import { ButtonForActionMenu } from "@/shared/ui/buttonForActionMenu";
import { useCommentContext } from "@/shared/ui/comment";

export const Menu = () => {
    const state = useCustomState();
    const context = useCommentContext();
    const features = context.features;

    const externalResetContext: ExternalResetContextType = {
        state,
        index: `${context.comment.id} container`,
    }

    const dropdownContext: DropdownContextType = {
        state: state.getState(),
        margin: false,
    }

    const onClick = () => {
        state.toggle();
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