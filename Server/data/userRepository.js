const { User } = require('./schemas/index');

class UserRepository {

    //Create
    async addAsync(object) {
        const u = new User({ ...object });
        await u.save();
        console.log('added', u._id.toString());
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
        console.log('added', doc._id.toString());
        return doc._id;
    }
    //Read
    async getAsync(filterquery = {}) {
        console.log('filter', filterquery);
        const query = User.find({ sort: '-createdAt' }).where(filterquery);
        console.log(query);
        return query;
    }
}

module.exports = UserRepository;