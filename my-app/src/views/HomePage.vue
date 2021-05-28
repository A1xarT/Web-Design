<template>
  <div id="homepage">
    <!-- navbar -->
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
    <br/>
    <h3 class="text-center">Your phonebook</h3>
    <!-- table -->
    <div class="container">
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th class="tableCol" scope="col">Name</th>
          <th class="tableCol" scope="col">Numbers</th>
          <th class="favoriteCol" scope="col">Favorite</th>
          <th class="controlButtons" scope="col">Manage number</th>
        </tr>
        </thead>
        <tbody id="phoneBookTable">
        </tbody>
      </table>
    </div>
    <!-- Management menu -->
    <div class="btn-group-vertical" id="buttonTable">
      <button class="btn btn-primary" id="addContactButton" type="button">Add a contact</button>
      <button class="btn btn-secondary" id="sortByNameButton" type="button">Sort by name</button>
      <button class="btn btn-dark" id="sortByFavoriteButton" type="button">Sort by favorite</button>
      <button class="btn btn-dark" @click="findMe">SUUUDAAA ALOAAAAAAAAAs</button>
    </div>
  </div>
</template>

<script>

import {findByMail} from "@/services/UserService.js";

export default {
  name: 'HomePage',
  components: {},
  mounted() {
    if (!localStorage.curUser) {
      this.$router.push('/')
    }
  },
  methods: {
    async findMe() {
      // eslint-disable-next-line no-unused-vars
      let user = {}
      await findByMail('mail@mailas.ru').then((response) => {
        if (response)
          user = response[0]
      })
      alert(JSON.stringify(user))
    }
  }
}
</script>
<style scoped src="../assets/css/homepage.css">
</style>
