<template>
  <div>
    <router-view/>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/homepage">
          <img alt="PhoneBook" height="70" src="../assets/img/emblem.png" width="70">
          Home
        </a>
        <div class="navbar-brand">
          <div class="navbar-nav">
            <a class="nav-link active" href="/aboutapp">About app</a>
          </div>
        </div>
        <span class="navbar-brand">
            <span class="navbar-nav">
                <a class="nav-link active" href="/profile">Profile</a>
            </span>
        </span>
      </div>
    </nav>

    <div class="container-fluid" id="profile-cont">
      <br/>
      <h3>Your PhoneBook Profile</h3><br/>
      <div class="row">
        <div class="col-md-3">
          <label for="newName">Name:</label>
        </div>
        <div class="col-md-3" id="name">
          {{ this.curUser.name }}
        </div>
        <div class="col-md-3">
          <input class="form-control" id="newName" placeholder="Name" type="text" v-model="name">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <label for="newEmail">Email:</label>
        </div>
        <div class="col-md-3" id="email">
          {{ this.curUser.email }}
        </div>
        <div class="col-md-3">
          <input class="form-control" id="newEmail" placeholder="Email" type="email" v-model="email">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <label for="newPass">Password:</label>
        </div>
        <div class="col-md-3" id="pass">
          ********
        </div>
        <div class="col-md-3">
          <input class="form-control" id="newPass" placeholder="Password" required type="password" v-model="password">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <label for="newDate">Date of birth:</label>
        </div>
        <div class="col-md-3" id="date">
          {{ this.curUser.birth_date }}
        </div>
        <div class="col-md-3">
          <input class="form-control" id="newDate" type="date" v-model="birth_date">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <label>Gender:</label>
        </div>
        <div class="col-md-3" id="gender">
          {{ this.curUser.gender }}
        </div>
        <div class="col-md-3">
          <form id="newGender">
            <input id="genderChoice1" name="gender" type="radio" value="male" v-model="gender">
            <label for="genderChoice1">Male</label>
            <input id="genderChoice2" name="gender" type="radio" value="female" v-model="gender">
            <label for="genderChoice2">Female</label>
            <input id="genderChoice3" name="gender" type="radio" value="other" v-model="gender">
            <label for="genderChoice3">Other</label>
          </form>
        </div>
      </div>
      <div class="row">
        <div aria-label="Basic example" class="btn-group" role="group">
          <button class="btn btn-outline-primary" id="updateProfileB" type="button" @click="update">Update</button>
          <button class="btn btn-outline-danger" id="exitB" type="button" @click="exit">Exit</button>
        </div>
      </div>
      <br/>
    </div>
  </div>
</template>

<script>
import {findByMail, updateUser} from "@/services/UserService.js";
import {toUser, validateEmail} from "@/model/User.js";

export default {
  name: 'Profile',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      birth_date: '',
      gender: '',
      curUser: ''
    }
  },
  mounted() {
    if (!localStorage.curUser) {
      this.$router.push('/')
    }
    findByMail(localStorage.curUser).then(response => {
      this.curUser = toUser(response[0])
    })
  },
  methods: {
    async update() {
      await findByMail(localStorage.curUser).then(async (res) => {
        let user = toUser(res[0])
        if (this.name) {
          user.name = this.name
        }
        if (this.password) {
          user.pass = this.password
        }
        if (this.birth_date) {
          user.birth_date = this.birth_date
        }
        if (this.gender) {
          user.gender = this.gender
        }
        if (this.email && !validateEmail(this.email)) {
          alert('Wrong email input')
          return
        }
        let flag = false
        if (this.email) {
          await findByMail(this.email).then((response) => {
            if (response[0] && this.email !== response[0].email) {
              alert('Email is already registered')
              flag = true
            } else {
              user.email = this.email
            }
          })
        }
        if (flag) return
        await updateUser(user).then()
        localStorage.curUser = user.email
        this.reloadPage()
      })
    },
    reloadPage() {
      this.$router.push('/homepage').then()
    },
    exit() {
      localStorage.curUser = ''
      this.$router.push('/').then()
    }
  }
}
</script>

<style scoped src="../assets/css/main.css">
</style>
