import { usePostPreviewContext } from "@/entities/postPreview/lib/context/Context"
import styles from './styles/Title.module.css'

export const Title = () => {
    const context = usePostPreviewContext();
    const postingDate = new Date(context.post.postingDate);

    // Форматирование даты
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(postingDate);
    console.log(formattedDate); // Вывод: "October 01, 2024"

    return (
        <div className={styles.container}>
            <div>
                {context.post.elements[0].value}
            </div>
            <div className={styles.date}>
                {formattedDate}
            </div>
        </div>
    )
}