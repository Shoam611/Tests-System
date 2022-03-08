// const { User } = require('./schemas/createConnection.js');
const { getModels } = require('./schemas/createConnection.js');

class UserRepository {

    //Create
    async addAsync(object) {
        const { User } = getModels();
        const u = new User({ ...object });
        await u.save();
        return u._id;
    }

    //Update
    async UpdateUser(id, newUser) {
        const { User } = getModels();
        const doc = await User.findOneAndReplace({ _id: id }, { _id: id, ...newUser });
        await doc.save();
        return doc._id;
    }
    //Delete
    async DeleteOneAsync(id) {
        const { User } = getModels();
        User.deleteByIdAsync(id);
    }


    //Read
    async getAsync() {
        const { User } = getModels();
        return User.find({ sort: '-createdAt' });
    }
}

module.exports = UserRepository;