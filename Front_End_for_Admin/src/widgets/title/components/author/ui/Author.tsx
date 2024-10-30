import { selectUserServices } from "@/entities/user"
import { useSelector } from "react-redux"
import styles from './styles/Author.module.css'
import { virtualPostActions } from "@/entities/postState";
import { useEffect, useRef } from "react";
import { getVirtualAuthor, useAppDispatch } from "@/shared/lib";
import TextareaAutosize from 'react-textarea-autosize';

export const Author = () => {
    const user = useSelector(selectUserServices).user;
    const author = getVirtualAuthor();
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (!author) {
            dispatch(virtualPostActions.updateAuthor(user.username));
        }
    })

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

    const adjustSize = () => {
        if (inputRef.current) {
            inputRef.current.style.width = 'auto';
            inputRef.current.style.width = `${inputRef.current.scrollWidth + 2}px`;
        }
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        dispatch(virtualPostActions.updateAuthor(element.value));
    };

    return (
        <div className={styles.container}>
            <span className={styles.creator}>
                Creator:
                <span>{user.username}</span>
            </span>
            <div className={styles.author}>
                <span>Author:</span>
                <TextareaAutosize
                    ref={inputRef}
                    placeholder="Enter Author"
                    defaultValue={author}
                    onKeyUp={handleKeyUp}
                    maxLength={20}
                    className={styles.input} />
            </div>
        </div>
    )
}