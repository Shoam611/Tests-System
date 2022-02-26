class TestsController {
    constructor({ testsRepository }) {
        this.testsRepository = testsRepository;
    }

    addTest = ({ body }) => {
        console.log('inController');
        const { newTest, } = body;
        if (!newTest) { console.log("Invalid Test"); return; }
        this.testsRepository.addAsync(newTest);
    }

    deleteTest = ({ body }) => {
        const { id } = body;
        console.log('in delete controller', id);
        this.testsRepository.DeleteOneAsync(id)
    }

    updateTest = async ({ body }) => {
        console.log('in update test');
        const { id } = body;
        const { newTest } = body;
        return await this.testsRepository.UpdateTest(id, newTest);
    }

    getTests = async (req) => {
        console.log('in get tests');

        return await this.testsRepository.getAsync();
    }
}

module.exports = TestsController;
