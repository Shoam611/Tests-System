class UsersController {
    constructor({ userRepository }) {
        this.userRepository = userRepository;
    }

    addUser = ({ body }) => {
        console.log('inController');
        const { newUser, } = body;
        if (!newUser) { console.log("Invalid Test"); return; }
        this.userRepository.addAsync(newUser);
    }

    deleteUser = ({ body }) => {
        const { id } = body;
        console.log('in delete controller', id);
        this.userRepository.DeleteOneAsync(id)
    }

    updateUser = async ({ body }) => {
        console.log('in update test');
        const { id } = body;
        const { newTest } = body;
        return await this.userRepository.UpdateUser(id, newTest);
    }

    getUser = async ({ query }) => {
        console.log('in get tests');
        const { topic } = query;
        let filter = {};
        if (topic) filter = { topic: topic }
        return await this.userRepository.getAsync(filter);
    }
}

module.exports = UsersController;