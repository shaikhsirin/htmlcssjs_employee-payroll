class EmployeePayrollData {
    //getter and setter method
    get name() {
        return this._name;
    }
    /** setter method for name validation */
    set name(name) {
        let nameRegex = RegExp('^[A-z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect';
    }

    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }

    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get salary() {
        return this._salary;
    };

    set salary(salary) {
        this._salary = salary;
    }

    get gender() {
        return this._gender;
    };
    set gender(gender) {
        this._gender = gender;
    }

    get startDate() {
        return this._startDate;
    }
    /** setter method for date with validation no future date , should be within 30days of joining */
    set startDate(startDate) {
        let currentDate = new Date();
        if (startDate > currentDate) {
            throw "Start date is a future date";
        }

        var diff = Math.abs(currentDate.getTime - startDate.getTime());
        if (diff / (1000 * 60 * 24) > 30) {
            throw "start date is beyond 30 days";
        }
        this._startDate = startDate;
    }

    //method
    toString() {

        return "id : " + this._id + ", name : " + this._name + ", salary : " + this._salary + ", gender : " + this._gender +
            ", date : " + this.startDate + ", profilepic : " + this._profilePic + ", department : " + this._department + ", note : " + this._note;

    }

}