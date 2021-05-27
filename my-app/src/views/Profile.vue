<template>
  <div>
    <router-view/>
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

    <div class="container-fluid" id="profile-cont">
      <br/>
      <h3>Your PhoneBook Profile</h3><br/>
      <div class="row">
        <div class="col-md-3">
          <label for="newName">Name:</label>
        </div>
        <div class="col-md-3" id="name">
        </div>
        <div class="col-md-3">
          <input class="form-control" id="newName" placeholder="Name" type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <label for="newEmail">Email:</label>
        </div>
        <div class="col-md-3" id="email">
        </div>
        <div class="col-md-3">
          <input class="form-control" id="newEmail" placeholder="Email" type="email">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <label for="newPass">Password:</label>
        </div>
        <div class="col-md-3" id="pass">
        </div>
        <div class="col-md-3">
          <input class="form-control" id="newPass" placeholder="Password" required type="password">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <label for="newDate">Date of birth:</label>
        </div>
        <div class="col-md-3" id="date">
        </div>
        <div class="col-md-3">
          <input class="form-control" id="newDate" type="date">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <label>Gender:</label>
        </div>
        <div class="col-md-3" id="gender">
        </div>
        <div class="col-md-3">
          <form id="newGender">
            <input id="genderChoice1" name="gender" type="radio" value="male">
            <label for="genderChoice1">Male</label>
            <input id="genderChoice2" name="gender" type="radio" value="female">
            <label for="genderChoice2">Female</label>
            <input id="genderChoice3" name="gender" type="radio" value="other">
            <label for="genderChoice3">Other</label>
          </form>
        </div>
      </div>
      <div class="row">
        <div aria-label="Basic example" class="btn-group" role="group">
          <button class="btn btn-outline-primary" id="updateProfileB" type="button">Update</button>
          <button class="btn btn-outline-danger" id="exitB" type="button">Exit</button>
        </div>
      </div>
      <br/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  components: {}
}
</script>

<style scoped src="../assets/css/main.css">
</style>
