class TestsController {
    constructor({ testsRepository }) {
        this.testsRepository = testsRepository;
    }

    addTest = async ({ body }) => {
        const { newTest, } = body;
        if (!newTest) { return null; }
        return await this.testsRepository.addAsync(newTest);
    }

    deleteTest = ({ body }) => {
        const { id } = body;
        this.testsRepository.DeleteOneAsync(id)
    }

    updateTest = async ({ body }) => {
        const { id } = body;
        const { newTest } = body;
        return await this.testsRepository.UpdateTest(id, newTest);
    }

    getTests = async ({ query }) => {
        const { topic } = query;
        let filter = {};
        if (topic) filter = { topic: topic }
        return await this.testsRepository.getAsync(filter);
    }
}

module.exports = TestsController;
