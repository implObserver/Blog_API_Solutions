import { useMemo } from 'react';
import { usePlugContext } from '../lib/context/Context'
import styles from './styles/Plug.module.css'

export const Plug = () => {
    const context = usePlugContext();

    // Мемоизация классов для повышения производительности
    const className = useMemo(() => {
        return context.state ? `${styles.plug} ${context.index}` : '';
    }, [context.state, context.index]);

    return (
        <div className={className}></div>
    );
};