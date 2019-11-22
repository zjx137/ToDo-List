const mongoose = require('../conn');

let todoSchema = require('../schemas/todo');

module.exports = mongoose.model('todos',todoSchema);