import { useProfileFormContext } from '../lib/context/Context'
import styles from './styles/ProfileForm.module.css'

export const ProfileForm = () => {
    const context = useProfileFormContext();

    const data = {
        nickname: context.data.nickname,
        gender: context.data.gender,
        age: context.data.age,
    }

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value
        context.setData(newData);
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
                <button className={styles.button} type='submit'>Save</button>
                <button className={styles.button} type='submit'>Cancel</button>
            </div>
        </form>
    )
}