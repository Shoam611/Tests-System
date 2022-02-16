class Test {
    constructor(testType, lang, managerEmail, name, passingGrade, header, msgOnSucc,
        msgOnFail, showIfWrong, emailSubOnSucc, emailBodyOnSucc, emailSubOnFail, emailBodyOnFail, questions) {

        this.testType = testType;
        this.lang = lang;
        this.managerEmail = managerEmail;
        this.name = name;
        this.passingGrade = passingGrade;
        this.header = header;
        this.msgOnSucc = msgOnSucc;
        this.msgOnFail = msgOnFail;
        this.showIfWrong = showIfWrong;
        this.emailSubOnSucc = emailSubOnSucc;
        this.emailBodyOnSucc = emailBodyOnSucc;
        this.emailSubOnFail = emailSubOnFail;
        this.emailBodyOnFail = emailBodyOnFail;
        this.questions = questions;
    }
}

export default Test;