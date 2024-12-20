import { useEffect, useRef } from "react";
import styles from './styles/ExternalReset.module.css';
import { Plug, PlugContext } from "@/shared/ui/externalReset/components/plug";
import { useExternalResetContext } from "../lib/context/Context";

export const ExternalReset = ({ children }) => {
    const externalElementRef = useRef<HTMLDivElement>(null);
    const context = useExternalResetContext();

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            let element: HTMLElement | SVGElement;
            let className: string;

            if (e.target instanceof SVGElement) {
                element = e.target;
                className = element.classList.value;
            } else {
                element = e.target as HTMLElement;
                className = element.className;
            }

            if (className.includes('plug')) {
                if (className.includes(context.index)) {
                    context.state.setState(false);
                }
            }
        };

        if (context.state.getState()) {
            document.addEventListener('mousedown', handler);
        }

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    }, [context]);

    const plugContext: PlaceholderContext = {
        isActive: context.state.getState(),
        key: context.index,
    }

    return (
        <div ref={externalElementRef} className={`${context.state.getState() ? `${styles.light} ${context.index}` : ''}`}>
            <PlugContext.Provider value={plugContext}>
                {children}
                <Plug />
            </PlugContext.Provider>
        </div>
    )
}