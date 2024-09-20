import { Provider } from "react-redux"
import { persistor, store } from "../store/Store"
import { PersistGate } from "redux-persist/integration/react"

const clearReduxPersist = () => {
    persistor.purge()
        .then(() => {
            console.log('Redux Persist store cleared');
        })
        .catch((error) => {
            console.error('Error clearing Redux Persist store', error);
        });
};

export const WithRedux = ({ children }) => {
    clearReduxPersist()
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </>

    )
}