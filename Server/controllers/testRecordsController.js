class TestRecordsController {
    constructor({ testRecordRepository }) {
        this.testRecordRepository = testRecordRepository;
    }

    addTestReport = async ({ body }) => {
        const { newTestReport } = body;
        if (!newTestReport) { return null; }
        return await this.testRecordRepository.addAsync(newTestReport);
    }
    
    getTestReport = async ({id}) => {
        //go to service () //not repository;
        return await this.testRecordRepository.getAsync();
    }
    // deleteTestReport = ({ body }) => this.testRecordRepository.DeleteOneAsync(body.id);
    // updateTestReport = async ({ body }) => {
    //     const { id } = body;
    //     const { newTestReport } = body;
    //     return await this.testRecordRepository.UpdateTestReport(id, newTestReport);
    // }
}

module.exports = TestRecordsController;