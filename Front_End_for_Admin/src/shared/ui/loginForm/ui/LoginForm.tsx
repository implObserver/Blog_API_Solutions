import { useLoginFormContext } from '../lib/context/Context'
import styles from './styles/UserForm.module.css'

export const LoginForm = () => {
    const context = useLoginFormContext();

    const data = {
        identifier: context.data.identifier,
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
                <label htmlFor="identifier">Email or Username:</label>
                <input
                    onChange={handle}
                    className={styles.input}
                    id="identifier"
                    name="identifier"
                    type="text"
                    placeholder="email or username"
                    value={data.identifier}
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