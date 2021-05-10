export default class User {
    constructor(name, email, pass, date, gender, records = []) {
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.date = date;
        this.gender = gender;
        this.records = records;
    }

    signUp() {
        if (localStorage.hasOwnProperty('usersDb')) {
            let users = JSON.parse(localStorage.getItem('usersDb'));
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == this.email) {
                    alert('email already registered');
                    return false;
                }
            }
            users.push({...this});
            localStorage.setItem('usersDb', JSON.stringify(users));
        } else {
            let users = [];
            users.push({...this});
            localStorage.setItem('usersDb', JSON.stringify(users));
        }
        return true;
    }

    saveChanges() {
        let users = JSON.parse(localStorage.getItem('usersDb'));
        for (let i = 0; i < users.length; i++) {
            if (users[i].email == this.email) {
                users.splice(i, 1);
                break;
            }
        }
        users.push({...this});
        localStorage.setItem('usersDb', JSON.stringify(users));
    }
}