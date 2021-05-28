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
          <input autofocus class="form-control" id="inputEmail" placeholder="Email address" required type="email"
                 v-model="userMail">
          <label class="visually-hidden" for="inputPassword"></label>
          <input class="form-control" id="inputPassword" placeholder="Password" required type="password"
                 v-model="password">
          <div class="checkbox mb-3">
            <label>
              <input id="rememberMe" type="checkbox" v-model="rememberUser"> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" id="loginButton" type="submit" @click="logUser">Log in</button>
          <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
import LUser from "@/model/LUser.js";
import {setUser} from "@/model/User.js"

export default {
  name: 'Login',
  data() {
    return {
      userMail: localStorage.username,
      password: '',
      rememberUser: localStorage.checkbox,
    }
  },
  methods: {
    logUser() {
      this.isRemembered()
      this.users = this.$store.getters.getUserList
      if (LUser.checkLogin(this.userMail, this.password, this.users)) {
        setUser(this.userMail)
        this.$router.push('/homepage')
      } else {
        alert('Wrong login or password')
        this.$router.push(this.$router.currentRoute)
      }
    },
    isRemembered() {
      if (this.userMail && this.rememberUser) {
        localStorage.username = this.userMail
        localStorage.checkbox = this.rememberUser
      } else {
        localStorage.username = ''
        localStorage.checkbox = ''
      }
    }
  }
}
</script>

<style scoped src="../assets/css/signup.css">
</style>
