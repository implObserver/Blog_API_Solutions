export { useCustomState } from './hooks/useCustomState'
export { formattedToday } from './helpers/getCurrentDate'
export { getFormattedDate } from './helpers/getFormattedDate'
export { getPostId } from './helpers/getPostId'
export {
    useAppDispatch,
    getCounter,
    getVirtualPost,
    getFocusIndex,
    getAuthState,
    getVirtualAuthor,
    getBackups,
} from './hooks/redux/useRedux'
export { instance } from './helpers/instance/getInstance'
export { useIndexedDb } from './hooks/indexedDB/useIndexedDB'