import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import { router } from './src/route/route';
import { restify } from './src/middleware/rest';

const app = new Koa();
app.use(bodyParser());

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(restify());

app.use(router.routes());

// 在端口3000监听:
app.listen(8443);
console.log('app started at port 8443...');