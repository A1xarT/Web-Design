export default class User {
    constructor(name, email, pass, date, gender, records = [], id = -1) {
        this.name = name;
        this.email = email;
        this.pass = pass;
        this.birth_date = date;
        this.gender = gender;
        this.records = records;
        this.id = id
    }
}

export function toUser(userParams) {
    let normalDate = userParams.birth_date
    const index = normalDate.indexOf('T')
    if (index > 0) {
        normalDate = normalDate.substring(0, index)
    }
    return new User(userParams.name, userParams.email, userParams.pass, normalDate, userParams.gender, userParams.records, userParams.id)
}

export function setUser(userEmail) {
    if (userEmail) {
        localStorage.curUser = userEmail
    } else {
        localStorage.curUser = null
    }
}

export function validateEmail(mail) {
    return /.+@.+\..+/.test(mail);
}
