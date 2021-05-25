import User from './User.js'

export default class LUser {

  static findByMail (mail) {
    // eslint-disable-next-line no-prototype-builtins
    if (localStorage.hasOwnProperty('usersDb')) {
      const users = JSON.parse(localStorage.getItem('usersDb'))
      for (let i = 0; i < users.length; i++) {
        // eslint-disable-next-line eqeqeq
        if (users[i].email == mail) {
          return new User(users[i].name, users[i].email, users[i].pass, users[i].date, users[i].gender, users[i].records)
        }
      }
    }
    return null
  }
}
