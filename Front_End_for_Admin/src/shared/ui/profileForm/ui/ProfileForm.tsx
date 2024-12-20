import { useProfileFormContext } from '../lib/context/Context'
import styles from './styles/ProfileForm.module.css'

export const ProfileForm = () => {
    const context = useProfileFormContext();
    const data = {
        nickname: context.formData.nickname ? context.formData.nickname : '',
        gender: context.formData.gender ? context.formData.gender : 'other',
        age: context.formData.age ? context.formData.age : 0,
    }

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value
        context.setFormData(newData);
    }

    return (
        <form className={styles.form_user}>
            <div className={styles.form_group}>
                <label htmlFor="nickname">Nickname:</label>
                <input
                    onChange={handle}
                    className={styles.input}
                    id="nickname"
                    name="nickname"
                    type="text"
                    placeholder="Enter nickname"
                    value={data.nickname}
                    autoComplete="on">
                </input>

                <label htmlFor="gender">Gender:</label>
                <input
                    onChange={handle}
                    className={styles.input}
                    id="gender"
                    name="gender"
                    type="gender"
                    placeholder="Enter your gender"
                    value={data.gender}
                    autoComplete="on">
                </input>

                <label htmlFor="age">Age:</label>
                <input
                    onChange={handle}
                    className={styles.input}
                    id="age"
                    name="age"
                    type="age"
                    placeholder="Enter your age"
                    value={data.age}
                    autoComplete="on">
                </input>
            </div>
            <div className={styles.container_buttons}>
                <button className={`${styles.button} ${styles.save}`} type='submit'>Save</button>
                <button className={styles.button} type='submit'>Cancel</button>
            </div>
        </form>
    )
}