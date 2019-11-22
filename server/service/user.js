const User = require('../db/models/user');
async function findAndValidUser(usr,psd) {
    try {
        const data =  await User.findOne({usr}).exec();
        let valid = Boolean(data.psd === psd);
        let _id = { userId:data._id };
        let res = { valid,_id };
        //console.log(res);
        return res;
    }
    catch(err) {
        throw new Error('error')
    }
}

async function addUser(usr,psd) {
    try {
        let user = new User({
            usr: usr,
            psd: psd
        });
        return await user.save();
    }
    catch(error) {
        throw new Error('创建失败。')
    }
}

let userService = {
    findAndValidUser,
    addUser,
}


//findUser('admin','admin')
module.exports = userService;