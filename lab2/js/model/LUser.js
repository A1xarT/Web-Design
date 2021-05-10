import User from './User.js';

export default class LUser {

    static findByMail(mail) {
        if (localStorage.hasOwnProperty('usersDb')) {
            let users = JSON.parse(localStorage.getItem('usersDb'));
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == mail) {
                    return new User(users[i].name, users[i].email, users[i].pass, users[i].date, users[i].gender, users[i].records);
                }
            }
        }
        return null;
    }
}