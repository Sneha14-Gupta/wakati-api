import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares'
import logger from '@/lib/logger'


export function createRouter(){
    return new OpenAPIHono({
        strict:false,
 } )
}
export function createApp(){
    const app = createRouter()



app.use(logger())
app.use(serveEmojiFavicon(''))
app.notFound(notFound)
app.onError(onError)

return app
}

