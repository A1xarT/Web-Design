<template>
<div>
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
  <div class="text-center">
    <h1>Phonebook</h1><br/>
    <div id="aboutArticle">
      <p>
        This app was made to allow people to easily keep lists of names and phone numbers in one comfy place.
      </p>
      <p>
        You can get to your own phonebook by clicking Home button. There you can store and manage your contacts.
        Don't forget to save after making changes.
      </p>
    </div>
    <img alt="Paper books are not usable" class="whitepages" src="../assets/img/whitepagesRIP.png">
  </div>
</div>
</template>

<script>
export default {
  name: 'AboutApp',
  components: {}
}
</script>

<style scoped src="../assets/css/main.css">
</style>
