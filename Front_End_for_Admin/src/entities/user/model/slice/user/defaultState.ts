import { loadUser } from "../../../api/localstorage/user/loadUser"
const user = loadUser();
const defaultUser = {
    id: 0,
    name: 'visitor'
}
export const initialState: User = user === undefined
    ? defaultUser
    : user === null
        ? defaultUser
        : user;