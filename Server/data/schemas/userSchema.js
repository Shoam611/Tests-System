const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String
}, { timestamps: true });

userSchema.statics.deleteByIdAsync = async function (id) {
    return this.deleteOne({ _id: id });
};
const UserModel = model('UserModel', userSchema);
module.exports = {
    UserModel
};