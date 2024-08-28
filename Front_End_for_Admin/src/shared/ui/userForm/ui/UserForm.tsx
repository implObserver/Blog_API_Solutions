import { useUserFormContext } from '../lib/context/Context'
import styles from './styles/UserForm.module.css'

export const UserForm = () => {
    const context = useUserFormContext();

    const data = {
        username: context.data.username,
        password: context.data.password,
    }

    const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = { ...data };
        newData[e.target.id] = e.target.value
        context.setData(newData);
    }

    return (
        <form>
            <div className={styles.form_group}>
                <label htmlFor="username">Username:</label>
                <input
                    onChange={handle}
                    className={styles.input}
                    id="username"
                    name="username"
                    type="text"
                    placeholder="username"
                    value={data.username}
                    autoComplete="on"
                    required>
                </input>

                <label htmlFor="password">Password:</label>
                <input
                    onChange={handle}
                    className={styles.input}
                    id="password"
                    name="password"
                    type="password"
                    value={data.password}
                    autoComplete="on"
                    required>
                </input>
            </div>
            <button className={styles.button} type='submit'>{context.type}</button>
        </form>
    )
}