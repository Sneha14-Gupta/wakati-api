import { pinoLogger, PinoLogger } from "hono-pino";

export default function logger(){
    return pinoLogger({
        http:{
            reqId:()=>crypto.randomUUID(),
        }
    })
}