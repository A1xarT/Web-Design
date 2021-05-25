import LUser from './LUser.js'
import User from './User.js'
import PhRecord from './PhRecord.js'

export default class Model {
  login () {
    this.isRememberMe()
    const email = document.getElementById('inputEmail').value
    const pass = document.getElementById('inputPassword').value
    if (!email || !pass || !this.validateEmail(email)) {
      alert('Wrong input')
      return false
    }
    const user = LUser.findByMail(email)
    // eslint-disable-next-line eqeqeq
    if (!user || user.pass != pass) {
      alert('Wrong login or password')
      return false
    }
    localStorage.curUser = email
    return true
  }

  signup () {
    const email = document.getElementById('inputEmail').value
    const pass = document.getElementById('inputPassword').value
    const name = document.getElementById('inputName').value
    const birthDate = document.getElementById('date').value
    const gender = document.getElementById('genderChoice')
    if (!email || !pass || !name || !this.validateEmail(email) || !birthDate) {
      alert('Wrong input')
      return false
    }
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        localStorage.curUser = email
        return new User(name, email, pass, birthDate, gender[i].value).signUp()
      }
    }
    return false
  }

  updateProfile () {
    if (!localStorage.curUser) {
      return false
    }
    const user = LUser.findByMail(localStorage.curUser)
    const name = document.getElementById('newName').value
    const email = document.getElementById('newEmail').value
    const pass = document.getElementById('newPass').value
    const birthDate = document.getElementById('newDate').value
    const gender = document.getElementById('newGender')
    if (name) {
      user.name = name
    }
    if (email) {
      if (!this.validateEmail(email)) {
        alert('Wrong email input')
        return false
      }
      // eslint-disable-next-line eqeqeq
      if (LUser.findByMail(email) && (email != user.email)) {
        alert('This email already registered')
        return false
      }
      user.email = email
    }
    if (pass) {
      user.pass = pass
    }
    if (birthDate) {
      const today = new Date()
      const parsedDate = Date.parse(birthDate)
      if (today >= parsedDate) {
        user.date = birthDate
      } else {
        alert('Wrong date input')
        return false
      }
    }
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        user.gender = gender[i].value
        break
      }
    }
    user.saveChanges()
    localStorage.curUser = user.email
    return true
  }

  exit () {
    localStorage.removeItem('curUser')
    document.location.href = '../../../lab2/LogIn.html'
  }

  addContact () {
    const name = prompt('Contact name:')
    if (!name) {
      return false
    }
    const user = LUser.findByMail(localStorage.curUser)
    for (let i = 0; i < user.records.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (user.records[i].name == name) {
        alert('Contact with this name already exists')
        return false
      }
    }
    const number = prompt('Phone number:')
    const record = new PhRecord(name, [number], false)
    record.addRecord()
    return true
  }

  sortByName () {
    const user = LUser.findByMail(localStorage.curUser)
    if (user.records.length > 1) {
      user.records.sort(function (a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
    }
    user.saveChanges()
  }

  sortByFavorite () {
    const user = LUser.findByMail(localStorage.curUser)
    if (user.records.length > 1) {
      user.records.sort(function (a, b) {
        if (a.favorite > b.favorite) {
          return -1
        }
        if (a.favorite < b.favorite) {
          return 1
        }
        return 0
      })
    }
    user.saveChanges()
  }

  validateEmail (mail) {
    return /.+@.+\..+/.test(mail)
  }

  isRememberMe () {
    const rmCheck = document.getElementById('rememberMe')
    const emailInput = document.getElementById('inputEmail')

    if (rmCheck.checked && emailInput.value !== '') {
      localStorage.username = emailInput.value
      localStorage.checkbox = rmCheck.value
    } else {
      localStorage.username = ''
      localStorage.checkbox = ''
    }
  }
}
