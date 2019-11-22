const Todo = require('../db/models/todo');

async function addTodo(userId, content) {
    const todo = new Todo({
        userId,
        content,
        status: false
    });
    return await todo.save();
}

async function deleteTodo(todoId) {
    return await Todo.findByIdAndDelete(todoId);
}

async function getAllTodos(userId) {
    return await Todo.find({
        userId
    });
}

async function updateTodoStatus(todoId) {
    const oldTodo = await Todo.findById(todoId).exec();

    return await Todo.updateOne({_id:todoId},{status:!oldTodo.status})
}
//let todoid = '5dd3ec2cb862b13d0faafb2e';
//updateTodoStatus(todoid);

async function updateTodoContent(todoId,content) {
    //let result;
    return await Todo.findByIdAndUpdate(todoId,{content},{useFindAndModify:false});
 
    //return result;
}
//updateTodoContent(todoid,'我还能做什么呢')

let todoService = {
    addTodo,
    deleteTodo,
    getAllTodos,
    updateTodoStatus,
    updateTodoContent
}
module.exports = todoService;