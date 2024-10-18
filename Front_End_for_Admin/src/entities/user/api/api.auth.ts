import { instance } from "@/app/api/api.config"


export const AuthService = {
    signup(email: string, password: string, username: string) {
        return instance.post("/api/user/signup", { email, password, username })
    },

    login(identifier: string, password: string) {
        return instance.post("/api/user/login", { identifier, password })
    },

    fastLogin() {
        return instance.get("/api/user/fastlogin");
    },

    refreshToken() {
        return instance.get("/api/user/refresh");
    },

    logout() {
        return instance.post("/api/user/logout")
    }
}