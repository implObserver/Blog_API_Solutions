import { Provider } from "react-redux"
import { store } from "../store/Store"

export const WithRedux = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}