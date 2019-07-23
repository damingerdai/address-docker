import { Context } from "koa";


export const restify = (pathPrefix: string = '/api/') => {
    return async (ctx: Context, next: () => Promise<any>) => {
        if (ctx.request.path.startsWith(pathPrefix)) {
            console.log(ctx.request.path);
            ctx.rest = (data: any) => {
                ctx.response.type = 'application/json';
                ctx.response.body = data;
                console.log(`data: ${data}`);
            }
        }
        await next();
    }
}