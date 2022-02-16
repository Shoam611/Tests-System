class TestsController {
    constructor({ mongoRepository }) {
        this.mongoRepository = mongoRepository;
    }

    addTest = ({ body }) => {
        console.log('inController');
        const { newTest, } = body;
        if (!newTest) { console.log("Invalid Test"); return; }
        this.mongoRepository.addAsync(Test);
    }

    deleteTest = ({ body }) => {
        const { id } = body;
        console.log('in delete controller', id);
        this.mongoRepository.DeleteOneAsync(id)
    }


    getTests = async (req) => {
        console.log('in get tests');
        const { oneOrMany } = req.query;
        console.log('one or Many', oneOrMany);
        switch (oneOrMany) {
            case "one":
                console.log('in one case');
                const { id } = req.query;
                return await this.mongoRepository.getOneAsync(id)
            case "many":
                const { skip, take } = req.query;
                console.log('in many case', skip, take);
                return await this.mongoRepository.getAsync(skip, take)
            default: return undefined;
        }
    };

}

module.exports = TestsController;