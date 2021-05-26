const axios = require('axios')

export default class TodoListBackend {
  constructor () {
    this.todoItems = []
    this.loadTodos()
  }

  get baseURL () {
    return 'http://127.0.0.1:8000/api/todo/'
  }

  async addItem (title) {
    await axios.post(this.baseURL, {
      title: title,
      done: false
    })
    await this.loadTodos()
  }

  getItems () {
    return this.todoItems
  }

  async loadTodos () {
    const result = await axios.get(this.baseURL + '')
    this.todoItems = result.data

  }

  async deleteItem (itemId) {
    await axios.delete(this.baseURL + itemId + '/')
    await this.loadTodos()

  }

  async editItem (itemId, title) {
    await axios.put(this.baseURL + itemId + '/', { title: title })
    await this.loadTodos()
  }

  async getItem (itemId) {
    const response = await axios.get(this.baseURL + itemId + '/')
    return response.data
  }

  async getTitle (itemId) {
    const item = await this.getItem(itemId)
    return item.title
  }

  async toggleDone (itemId) {
    const item = await this.getItem(itemId)
    await axios.patch(this.baseURL + itemId + '/', { done: !item.done })
    await this.loadTodos()
  }
}
