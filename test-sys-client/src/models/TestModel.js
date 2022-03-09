class Test {
    constructor(topic, testType, lang, managerEmail, name, passingGrade, header, msgOnSucc,
        msgOnFail, showIfWrong, emailSubOnSucc, emailBodyOnSucc, emailSubOnFail, emailBodyOnFail, questions) {

        this.topic = topic;
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

    ValidateEmail = (mail) => {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail)) {
            return true;
        }
        return false;
    }

    validate() {
        if (!this.topic)
            return [false, 'Please Choose a Topic.'];

        if (+this.testType < 1 || +this.testType > 3)
            return [false, 'Please Choose a Test Type.'];

        if (+this.lang < 1 || +this.lang > 2)
            return [false, 'Please Choose a Language.'];

        if (this.managerEmail.length === 0)
            return [false, 'Email Address Cannot Be Empty!'];

        if (!this.ValidateEmail(this.managerEmail))
            return [false, 'Invalid Email Address!'];

        if (this.name.length === 0)
            return [false, 'Test Name Cannot Be Empty!'];

        if (this.passingGrade.length === 0)
            return [false, 'Passing Grade Cannot Be Empty!'];

        if (this.passingGrade < 1 || this.passingGrade > 100)
            return [false, 'Invalid Passing Grade! Must Be Between 1 and 100.'];

        if (this.header.length === 0)
            return [false, 'Test Header Cannot Be Empty!'];

        if (this.msgOnSucc.length === 0)
            return [false, 'Message On Succes Cannot Be Empty!'];

        if (this.msgOnFail.length === 0)
            return [false, 'Message On Failure Cannot Be Empty!'];

        if (this.emailSubOnSucc.length === 0 || this.emailBodyOnSucc.length === 0)
            return [false, 'Email On Succes Fields Cannot Be Empty!'];

        if (this.emailSubOnFail.length === 0 || this.emailBodyOnFail.length === 0)
            return [false, 'Email On Failure Fields Cannot Be Empty!'];

        if (this.questions.length === 0)
            return [false, 'Must Select Questions In The "Manage Questions" Tab.'];

        return [true, 'Preceding Create Test...'];
    }
}

export default Test;