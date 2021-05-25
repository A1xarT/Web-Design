<template>
  <div id="homepage">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="HomePage.vue">
          <img alt="PhoneBook" height="70" src="../assets/img/emblem.png" width="70">
          Home
        </a>
        <div class="navbar-brand">
          <div class="navbar-nav">
            <a class="nav-link active" href="AboutApp.vue">About app</a>
          </div>
        </div>
        <span class="navbar-brand">
            <span class="navbar-nav">
                <a class="nav-link active" href="Profile.vue">Profile</a>
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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomePage',
  components: {}
}
</script>
<style scoped src="../assets/css/homepage.css">
</style>
