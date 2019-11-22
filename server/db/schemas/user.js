const mongoose = require('../conn');

let Schema = mongoose.Schema; 
let UserSchema = new Schema({    
    usr: {
    type: String,
    required: true,
    unique: true,
    },
    psd: {type:String}
});
module.exports = UserSchema;
