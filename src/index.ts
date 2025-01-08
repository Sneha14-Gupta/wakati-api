import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'

const app = new OpenAPIHono()

app.notFound(notFound)
app.onError(onError)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.get('error', (c) => {
  throw new Error('This is an error')
})

export default app
