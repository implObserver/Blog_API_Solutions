import { useSecurityMiddlewares } from './security/index.js'
import { useAuthMiddleware } from "./auth/index.js";
import { useErrorsMiddleware } from "./errors/index.js";
import { useFilesMiddleware } from "./files/index.js";
import { useLoggingMiddleware } from "./logging/index.js";
import { useRequestParsersMiddleware } from "./requestParsers/index.js";
import { useRoutes } from "./routes/useRoutes.js";
import { useSession } from "./session/useSession.js"

export const useDevMiddlewares = () => {
    useSecurityMiddlewares();
    useSession();
    useAuthMiddleware();
    useLoggingMiddleware();
    useRequestParsersMiddleware();
    useFilesMiddleware();
    useRoutes();
    useErrorsMiddleware();
}