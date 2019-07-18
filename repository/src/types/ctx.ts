import { Context } from 'koa';

export interface RestKoaContext extends Context {
    rest: (data: any) => void;
}