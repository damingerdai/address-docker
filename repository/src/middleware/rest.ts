import { Context } from "koa";


export const restify = (pathPrefix: string = '/api/') => {
    return async (ctx: Context, next: () => Promise<any>) => {
        if (ctx.request.path.startsWith(pathPrefix)) {
            ctx.rest = (data: any) => {
                ctx.response.type = 'application/json';
                ctx.response.body = data;
            }
        }
        await next();
    }
}