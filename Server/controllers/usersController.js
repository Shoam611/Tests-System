class UsersController {
    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    addUser = ({ body }) => {
        const { newUser, } = body;
        if (!newUser) { return null; }
        this.userRepository.addAsync(newUser);
    }

    deleteUser = ({ body }) =>  this.userRepository.DeleteOneAsync(body.id) 

    updateUser = async ({ body }) => {
        const { id,newTest } = body;
        return await this.userRepository.UpdateUser(id, newTest);
    }

    getUser = async ({ query }) => {
        const { topic } = query;
        let filter = {};
        if (topic) filter = { topic: topic }
        return await this.userRepository.getAsync(filter);
    }
}

module.exports = UsersController;