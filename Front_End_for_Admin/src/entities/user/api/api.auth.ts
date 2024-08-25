import { instance } from "@/app/api/api.config"


export const AuthService = {
    signup(username: string, password: string) {
        return instance.post("/api/user/signup", { username, password })
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