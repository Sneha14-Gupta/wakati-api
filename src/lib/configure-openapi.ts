import { OpenAPIHono } from "@hono/zod-openapi";
import { apiReference } from "@scalar/hono-api-reference";
import packageJson from "../../package.json";

export default function configureOpenAPI(app:OpenAPIHono){
    app.doc("/doc",{
        openapi:"3.0.0",
        info:{
            title:"wakati-api",
            version:packageJson.version,
            description:"Text Intelligence API",
        },
    })
    app.get(
        '/reference',
        apiReference({
            theme:"bluePlanet",
            spec:{
                url:'/doc',
            },
 } ),
)
}