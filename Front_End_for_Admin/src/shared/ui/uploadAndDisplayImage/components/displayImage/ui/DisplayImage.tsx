import styles from './styles/DisplayImage.module.css'
import { useImageContext } from "../../../lib/context/Context";
import { useMemo } from 'react';

export const DisplayImage = () => {
    const context = useImageContext();

    // Мемоизация выбранного изображения
    const selectedImage = useMemo(() => context.file, [context.file]);

    return (
        <div className={styles.container}>
            {selectedImage && (
                <div>
                    {/* Отображение выбранного изображения */}
                    <img
                        className={styles.img}
                        alt="preview"
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br /> <br />
                    {/* Кнопка для удаления выбранного изображения */}
                    <button className={styles.button} onClick={() => context.setImgFile(null)}>
                        Remove
                    </button>
                </div>
            )}
        </div>
    );
};