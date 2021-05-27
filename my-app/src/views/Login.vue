<template>
  <div id="loginForm">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img alt="PhoneBook" height="70" src="../assets/img/emblem.png" width="70">
        </a>
        <span class="navbar-text">
            <span class="navbar-collapse">
                  <router-link style="text-decoration: none" to="/signup">
                    Sign up
                  </router-link>
            </span>
        </span>
      </div>
    </nav>
    <br/><br/><br/><br/>
    <div class="text-center">
      <main class="form-login">
        <form>
          <img alt="PhoneBook" class="mb-4" height="80" src="../assets/img/emblem.png" width="80">
          <img alt="PhoneBook" class="mb-4" src="../assets/img/appName.png">
          <p class="h3 mb-3 fw-normal">Please log in</p>
          <label class="visually-hidden" for="inputEmail"></label>
          <input autofocus class="form-control" id="inputEmail" placeholder="Email address" required type="email">
          <label class="visually-hidden" for="inputPassword"></label>
          <input class="form-control" id="inputPassword" placeholder="Password" required type="password">
          <div class="checkbox mb-3">
            <label>
              <input id="rememberMe" type="checkbox"> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" id="loginButton" type="submit" @click="add">Log in</button>
          <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
      </main>
    </div>
    <button class="w-100 btn" @click="getAllUsers">LOAD USER LIST</button>
    <button class="w-100 btn" @click="showUsers">SHOW USER LIST</button>
  </div>
</template>

<script>
import {getAllUsers} from '@/services/UserService'

export default {
  name: 'Login',
  data() {
    return {
      users: []
    }
  },
  methods: {
    getAllUsers() {
      getAllUsers().then(response => {
        console.log(response)
        this.users = response
      })
    },
    showUsers() {
      alert(this.users)
    },
  },
  mounted() {
    this.getAllUsers();
  }
}
</script>

<style scoped src="../assets/css/signup.css">
</style>
