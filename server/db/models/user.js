const mongoose = require('../conn');
//这里不能用const cnmd
let userSchema = require('../schemas/user');

module.exports = mongoose.model('Users',userSchema);