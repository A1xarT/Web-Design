<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand">
          <img alt="PhoneBook" height="70" src="../assets/img/emblem.png" width="70">
        </a>
      </div>
    </nav>
    <br/><br/><br/>
    <div class="text-center">
      <div class="table-responsive">
        <img alt="PhoneBook - the easiest way to store your contacts" src="../assets/img/motto.png"><br/><br/>
      </div>
      <main class="form-signup">
        <form>
          <h1 class="h3 mb-3 fw-normal">Enter your data to register</h1>
          <br/><br/>
          <label class="visually-hidden" for="inputName">Name</label>
          <input autofocus class="form-control" id="inputName" placeholder="Name" required type="text">
          <label class="visually-hidden" for="inputEmail">Email address</label>
          <input class="form-control" id="inputEmail" placeholder="Email address" required type="email">
          <label class="visually-hidden" for="inputPassword">Password</label>
          <p><input class="form-control" id="inputPassword" placeholder="Password" required type="password"></p>
          <form>
            <h6>
              <label for="date">Date of birth: </label><br/><br/>
              <input class="form-control" id="date" name="date" type="date"/>
            </h6>
          </form>
          <h6>Gender:</h6>
          <form id="genderChoice">
            <input id="genderChoice1" name="gender" type="radio" value="male">
            <label for="genderChoice1">Male</label>
            <input id="genderChoice2" name="gender" type="radio" value="female">
            <label for="genderChoice2">Female</label>
            <input id="genderChoice3" name="gender" type="radio" value="other">
            <label for="genderChoice3">Other</label>
          </form>
          <br/>
          <button class="w-100 btn btn-lg btn-primary" id="signupButton" type="submit">Sign up</button>
          <p class="mt-5 mb-3 text-muted">&copy; 2021</p>
        </form>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  components: {}
}
</script>

<style scoped src="../assets/css/signup.css">
</style>
