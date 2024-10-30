import { useEffect, useRef } from 'react';
import styles from './styles/Strong.module.css'
import { useListAreaContext } from '../../../lib/context/Context';
import TextareaAutosize from 'react-textarea-autosize';


export const Strong = () => {
    const context = useListAreaContext();
    const strong = context.value.getStrongText();
    const inputRef = useRef<HTMLTextAreaElement | null>(null);
   
    useEffect(() => {
        adjustSize();
    }, [strong]);

    useEffect(() => {
        // Устанавливаем начальную ширину в зависимости от медиа-запроса
        adjustSize();

        // Медиа-запрос для ширины экрана до 700px
        const mediaQuery = window.matchMedia('(max-width: 700px)');

        // Обработчик изменения медиа-запроса
        const handleMediaChange = () => adjustSize();

        // Добавляем обработчик
        mediaQuery.addEventListener('change', handleMediaChange);

        // Очищаем обработчик при размонтировании
        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    const strong_grow = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.stopPropagation();
        } else {
            adjustSize();
            context.value.setStrongText(element.value);
        }
    };

    const adjustSize = () => {
        if (inputRef.current) {
            inputRef.current.style.width = 'auto'; // Сброс ширины
            inputRef.current.style.width = `${inputRef.current.scrollWidth + 2}px`; // Устанавливаем на основе содержимого
        }
    };

    return (
        <div className={styles.container}>
            <TextareaAutosize
                id={`strong_${context.value.getId()}`}
                ref={inputRef}
                autoFocus={context.isFocused}
                onKeyUp={strong_grow}
                placeholder={context.strongPlaceholder}
                defaultValue={strong}
                className={styles.strong_list}
                maxLength={context.maxLength}
                style={{ resize: 'none', overflow: 'hidden' }} // Отключаем ручное изменение и скрываем полосу прокрутки
            />
        </div>
    );
};