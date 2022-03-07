class UsersController {
    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    addUser = async ({ body }) => {
        const { newUser, } = body;
        if (!newUser) { return null; }
        return await this.userRepository.addAsync(newUser);
    }

    deleteUser = ({ body }) =>  this.userRepository.DeleteOneAsync(body.id) 

    updateUser = async ({ body }) => {
        const { id,newTest } = body;
        return await this.userRepository.UpdateUser(id, newTest);
    }

    getUsers = async () => {
        return await this.userRepository.getAsync();
    }
}

module.exports = UsersController;