class TestsController {
    constructor({ testsMongoRepository }) {
        this.testsMongoRepository = testsMongoRepository;
    }
    addTest = async ({ body }) => {
        const { newTest, } = body;
        console.log('inController', newTest);
        if (!newTest) { console.log("Invalid Test"); return; }
        return await this.testsMongoRepository.addAsync(newTest);
    }

    deleteTest = ({ body }) => {
        const { id } = body;
        console.log('in delete controller', id);
        this.testsMongoRepository.DeleteOneAsync(id)
    }

    getTests = async (req) => {
        console.log('in get tests');
        const { oneOrMany } = req.query;
        console.log('one or Many', oneOrMany);
        switch (oneOrMany) {
            case "one":
                console.log('in one case');
                const { id } = req.query;
                return await this.testsMongoRepository.getOneAsync(id)
            case "many":
                const { skip, take } = req.query;
                console.log('in many case', skip, take);
                return await this.testsMongoRepository.getAsync(skip, take)
            default: return undefined;
        }
    };

}

module.exports = TestsController;
