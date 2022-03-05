const { User } = require('./schemas/index');

class UserRepository {

    //Create
    async addAsync(object) {
        const u = new User({ ...object });
        await u.save();
        return u._id;
    }
    
    //Delete
    async DeleteOneAsync(id) {
        User.deleteByIdAsync(id);
    }
    //Update
    async UpdateUser(id, newUser) {
        const doc = await User.findOneAndReplace({ _id: id }, { _id: id, ...newUser });
        await doc.save();
        return doc._id;
    }
    //Read
    async getAsync(filterquery = {}) {
        const query = User.find({ sort: '-createdAt' }).where(filterquery);
        return query;
    }
}

module.exports = UserRepository;