import { instance } from "@/app/api/api.config"


export const AuthService = {
    signup(mail: string, password: string) {
        return instance.post("/api/user/signup", { mail, password })
    },

    login(username: string, password: string) {
        return instance.post("/api/user/login", { username, password })
    },

    refreshToken() {
        return instance.get("/api/user/refresh");
    },

    logout() {
        return instance.post("/api/user/logout")
    }
}