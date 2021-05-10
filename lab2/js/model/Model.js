import LUser from './LUser.js';
import User from './User.js';
import PhRecord from './PhRecord.js';

export default class Model {
    login() {
        this.isRememberMe();
        let email = document.getElementById('inputEmail').value,
            pass = document.getElementById('inputPassword').value;
        if (!email || !pass || !this.validateEmail(email)) {
            alert('Wrong input');
            return false;
        }
        let user = LUser.findByMail(email);
        if (!user || user.pass != pass) {
            alert('Wrong login or password');
            return false;
        }
        localStorage.curUser = email;
        return true;
    }

    signup() {
        let email = document.getElementById('inputEmail').value,
            pass = document.getElementById('inputPassword').value,
            name = document.getElementById('inputName').value,
            birthDate = document.getElementById('date').value,
            gender = document.getElementById('genderChoice');
        if (!email || !pass || !name || !this.validateEmail(email) || !birthDate) {
            alert('Wrong input');
            return false;
        }
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                localStorage.curUser = email;
                return new User(name, email, pass, birthDate, gender[i].value).signUp();
            }
        }
        return false;
    }

    updateProfile() {
        if (!localStorage.curUser)
            return false;
        let user = LUser.findByMail(localStorage.curUser);
        let name = document.getElementById('newName').value,
            email = document.getElementById('newEmail').value,
            pass = document.getElementById('newPass').value,
            birthDate = document.getElementById('newDate').value,
            gender = document.getElementById('newGender');
        if (name) {
            user.name = name;
        }
        if (email) {
            if (!this.validateEmail(email)) {
                alert('Wrong email input');
                return false;
            }
            if (LUser.findByMail(email) && (email != user.email)) {
                alert('This email already registered');
                return false;
            }
            user.email = email;
        }
        if (pass) {
            user.pass = pass;
        }
        if (birthDate) {
            let today = new Date();
            let parsedDate = Date.parse(birthDate);
            if (today >= parsedDate) {
                user.date = birthDate;
            } else {
                alert('Wrong date input');
                return false;
            }
        }
        for (let i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                user.gender = gender[i].value;
                break;
            }
        }
        user.saveChanges();
        localStorage.curUser = user.email;
        return true;
    }

    exit() {
        localStorage.removeItem('curUser');
        document.location.href = '../../../lab2/LogIn.html';
    }

    addContact() {
        let name = prompt('Contact name:');
        if (!name) {
            return false;
        }
        let user = LUser.findByMail(localStorage.curUser);
        for (let i = 0; i < user.records.length; i++) {
            if (user.records[i].name == name) {
                alert('Contact with this name already exists');
                return false;
            }
        }
        let number = prompt('Phone number:');
        let record = new PhRecord(name, [number], false);
        record.addRecord();
        return true;
    }

    sortByName() {
        let user = LUser.findByMail(localStorage.curUser);
        if (user.records.length > 1) {
            user.records.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        }
        user.saveChanges();
    }

    sortByFavorite() {
        let user = LUser.findByMail(localStorage.curUser);
        if (user.records.length > 1) {
            user.records.sort(function (a, b) {
                if (a.favorite > b.favorite) {
                    return -1;
                }
                if (a.favorite < b.favorite) {
                    return 1;
                }
                return 0;
            });
        }
        user.saveChanges();
    }

    validateEmail(mail) {
        return /.+@.+\..+/.test(mail);
    }

    isRememberMe() {
        const rmCheck = document.getElementById('rememberMe'),
            emailInput = document.getElementById('inputEmail');

        if (rmCheck.checked && emailInput.value !== '') {
            localStorage.username = emailInput.value;
            localStorage.checkbox = rmCheck.value;
        } else {
            localStorage.username = '';
            localStorage.checkbox = '';
        }
    }
}