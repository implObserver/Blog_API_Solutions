import { useRaw } from "./buffer/useRaw.js";
import { useCookieParser } from "./cookie/useCookieParser.js";
import { useJSONParser } from "./json/useJSONparser.js"
import { useURLParser } from "./url/useURLparser.js";

export const useRequestParsersMiddleware = () => {
    //useRaw();
    useJSONParser();
    useURLParser();
    useCookieParser();
}