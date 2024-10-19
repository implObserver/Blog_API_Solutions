import { useMemo } from 'react';
import { usePlugContext } from '../lib/context/Context'
import styles from './styles/Plug.module.css'

export const Plug = () => {
    const context = usePlugContext();

    const className = useMemo(() => {
        return context.isActive ? `${styles.plug} ${context.key}` : '';
    }, [context.isActive, context.key]);

    return (
        <div className={className}></div>
    );
};