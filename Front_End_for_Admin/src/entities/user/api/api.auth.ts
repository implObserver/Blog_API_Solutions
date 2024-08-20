import { instance } from "@/app/api/api.config"


export const AuthService = {
    signup(username: string, password: string) {
        return instance.post("/api/signup", { username, password })
    },

    login(username: string, password: string) {
        return instance.post("/api/login", { username, password })
    },

    refreshToken() {
        return instance.get("/api/refresh");
    },

    logout() {
        return instance.post("/api/logout")
    }
}