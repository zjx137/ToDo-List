const Router = require('koa-router');
const todoService = require('../service/todo');
const createResponse = require('../utils/response');

const todoRoutes = new Router({
    prefix:'/api/todos'
});

todoRoutes
    .get('/all/:userId', async (ctx)=>{
        const userId = ctx.params.userId;
        const data = await todoService.getAllTodos(userId);
        if(data){
            createResponse({
                ctx,
                data,
                path:'/api/todos/all'
            })
        }
        else{
            createResponse({
                ctx,
                message: "请求失败",
                status: 400
            })               
        }
    })
    .post('/',async (ctx)=>{
        let { userId,content } = ctx.request.body;
        const data = await todoService.addTodo(userId,content);
        if(data){
            createResponse({
                ctx,
                data,
                path:'/api/todos'
            })
        }
        else{
            createResponse({
                ctx,
                message: "请求失败",
                status: 400
            })               
        }
    })
    //put content status delete
    .put('/content',async(ctx)=>{
        const { todoId,content } = ctx.request.body;
        try {
            let data = await todoService.updateTodoContent(todoId,content);
            if(data){
                createResponse({
                    ctx,
                    data,
                    path:'/api/todos/content'
                })
            }
            else{
                createResponse({
                    ctx,
                    message: "请求失败",
                    status: 400
                })
            }
        }
        catch(error) {
            createResponse({
                ctx,
                message: error.message,
                status: 400
            })
        }
    })
    .put('/status',async(ctx)=>{
        const { todoId } = ctx.request.body;
        try {
            const data = await todoService.updateTodoStatus(todoId);
            if(data){
                createResponse({
                    ctx,
                    path:'/api/todos/status'
                })
            }
            else{
                createResponse({
                    ctx,
                    message: "请求失败",
                    status: 400
                })               
            }
        }
        catch(error) {
            createResponse({
                ctx,
                message: error.message,
                status: 400
            })
        }       
    })
    .delete('/:todoId',async (ctx)=>{
        const todoId = ctx.params.todoId;
        try{
            const data = await todoService.deleteTodo(todoId);
            if(data){
                createResponse({
                    ctx,
                    path:'/api/todos/:todoId'
                })
            }
            else{
                createResponse({
                    ctx,
                    message: "请求失败",
                    status: 400
                })               
            }
        }
        catch(error){
            createResponse({
                ctx,
                message: error.message,
                status: 400
            })            
        }
    })

module.exports = todoRoutes;