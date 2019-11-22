const mongoose = require('../conn');

let Schema = mongoose.Schema;
let todoSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    content: String,
    status: Boolean
});

module.exports = todoSchema;