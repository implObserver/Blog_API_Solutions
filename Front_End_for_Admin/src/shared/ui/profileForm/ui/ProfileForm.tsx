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
        <form>
            <div className={styles.form_group}>
                <label htmlFor="username">Nickname:</label>
                <input
                    onChange={handle}
                    className="form-control"
                    id="nickname"
                    name="nickname"
                    type="text"
                    placeholder="nickname"
                    value={data.nickname}
                    autoComplete="on"
                    required>
                </input>

                <label htmlFor="password">Gender:</label>
                <input
                    onChange={handle}
                    className="form-control"
                    id="gender"
                    name="gender"
                    type="gender"
                    value={data.gender}
                    autoComplete="on"
                    required>
                </input>

                <label htmlFor="password">Age:</label>
                <input
                    onChange={handle}
                    className="form-control"
                    id="age"
                    name="age"
                    type="age"
                    value={data.age}
                    autoComplete="on"
                    required>
                </input>
            </div>
            <button type='submit'>save</button>
        </form>
    )
}