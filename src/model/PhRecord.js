import LUser from './LUser.js'

export default class PhRecord {
  constructor (name, numbers, favorite) {
    this.name = name
    this.numbers = numbers
    this.favorite = favorite
  }

  addRecord () {
    const user = LUser.findByMail(localStorage.curUser)
    user.records.push({ ...this })
    user.saveChanges()
  }
}
