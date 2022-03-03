const { Schema } = require('mongoose');
const {usersDb} = require('../../services/mongoHandler');
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    roles: Array,
    testsIds: Array,
}, { timestamps: true });

userSchema.statics.deleteByIdAsync = async function (id) {
    return this.deleteOne({ _id: id });
};
const User = usersDb.model('Users', userSchema);
module.exports = {
    User
};