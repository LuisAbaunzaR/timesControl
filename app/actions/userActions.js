const User = require('../models/Users');

const createUser = async (data) => {
    return User.create(data);
}

const getAllUsers = () => {
    return User.find({is_active:true}).select("-password")
};

const getUserById = (id) => {
    return User.findOne({_id:id,is_active:true}).select("-password");
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById
};