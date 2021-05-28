export default class LUser {

    static findByMail(mail, userList) {
        userList.forEach(element => {
            if (element.email === mail) {
                return element
            }
        })
        return false
    }

    static checkLogin(mail, password, userList) {
        for (let element of userList) {
            if (element.email === mail && element.pass === password) {
                return element
            }
        }
        return false
    }
}
