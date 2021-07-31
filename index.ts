import Koa from 'koa'

const app = new Koa();

app.use(foo)
app.use(notFoundAlternative)
app.listen(3000)

let counter = 0;

function foo(context:Koa.Context, next:Koa.Next){
    // Only on /start
    if(context.url.endsWith('/start')){
        context.body = "Hello World"
    }
    else if(context.url.endsWith('/count')){
        counter ++;
        context.body = counter;
    }
    else if(context.url.endsWith('/test')){
        context.body = Math.sqrt(-1);
    }
    else{
        return next()
    }
}

function notFoundAlternative(context:Koa.Context, next:Koa.Next){
    context.body = 'wrong place mate'
    context.status = 404;
}