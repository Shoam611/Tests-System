const { UserModel } = require('./schemas/userSchema');

class UserRepository {

    //Create
    async addAsync(object) {
        const u = new UserModel({ ...object });
        await u.save();
        console.log('added', u._id.toString());
        return u._id;
    }
    //Delete
    async DeleteOneAsync(id) {
        UserModel.deleteByIdAsync(id);
    }

    //Update
    async UpdateUser(id, newUser) {
        const doc = await UserModel.findOneAndReplace({ _id: id }, { _id: id, ...newUser });
        await doc.save();
        console.log('added', doc._id.toString());
        return doc._id;
    }

    //Read
    async getAsync(filterquery = {}) {
        console.log('filter', filterquery);
        const query = UserModel.find({ sort: '-createdAt' }).where(filterquery);
        console.log(query);
        return query;
    }

}

module.exports = UserRepository;