const { Schema } = require('mongoose');
// const {usersDb} = require('../../services/mongoHandler');
const createUserModel = (connection) => {
    const userSchema = new Schema({
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: String,
        roles: Array,
        testsIds: Array,
    }, { timestamps: true });
    userSchema.statics.deleteByIdAsync = async (id) => this.deleteOne({ _id: id });

    const User = connection.model('Users', userSchema);
    return User
}
// module.exports = {
//     User
// };