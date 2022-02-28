class User {
    constructor(firstName, lastName, email, phoneNumber, testsIds, roles) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.testsIds = testsIds;
        this.roles = roles;
    }
}

export default User;