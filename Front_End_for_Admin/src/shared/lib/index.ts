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
    getScroll,
    getStatuses,
} from './hooks/redux/useRedux'
export { instance } from './helpers/instance/getInstance'
export { useIndexedDb } from './hooks/indexedDB/useIndexedDB'
export { compressImage } from './helpers/compressBlob'