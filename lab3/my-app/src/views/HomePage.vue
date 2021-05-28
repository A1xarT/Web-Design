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
        <tr v-for="(item, index) in this.user_records" :key="item">
          <th id="contactNumber">{{ index + 1 }}</th>
          <td>
            {{ item.name }}
            <button class="btn btn-sm btn-danger" type="button" style="float:right" @click="deleteContact(item)">
              Delete
            </button>
            <button class="btn btn-sm btn-warning" type="button" style="float:right" @click="editContactName(item)">
              Edit
            </button>
          </td>
          <td>
            <form>
              <label for="numbers"></label>
              <select id="numbers" name="numbers" v-model="this.selectedPhone">
                <option v-for="phoneItem in item.phones" :key="phoneItem">{{ phoneItem.number }}</option>
              </select>
            </form>
          </td>
          <td class=" checkbox
                ">
            <label for="FavCheck1"></label>
            <input id="FavCheck1" type="checkbox" v-model="item.favorite" @click="updateUserRecord(item)">
          </td>
          <td class="controlButtons">
            <button class="btn btn-sm btn-primary controlButton" @click="addNumber(index, this.selectedPhone)">Add
            </button>
            <button class="btn btn-sm btn-primary controlButton" @click="editNumber(index, this.selectedPhone)">Edit
            </button>
            <button class="btn btn-sm btn-danger controlButton" @click="deleteNumber(index,this.selectedPhone)">Delete
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <!-- Management menu -->
    <div class="btn-group-vertical" id="buttonTable">
      <button class="btn btn-primary" id="addContactButton" type="button" @click="addContact">Add a contact</button>
      <button class="btn btn-secondary" id="sortByNameButton" type="button" @click="sortByName">Sort by name</button>
      <button class="btn btn-dark" id="sortByFavoriteButton" type="button" @click="sortByFav">Sort by favorite</button>
    </div>
  </div>
</template>

<script>

import {findByMail, getUserRecords, updateRecord, deleteRecord, addRecord, getPhones} from "@/services/UserService.js";
import {toUser} from "@/model/User";

export default {
  name: 'HomePage',
  data() {
    return {
      curUser: '',
      selectedPhone: '',
      user_records: []
    }
  },
  mounted() {
    if (!localStorage.curUser) {
      this.$router.push('/')
    }
    findByMail(localStorage.curUser).then(response => {
      this.curUser = toUser(response[0])
      getUserRecords(this.curUser).then(response => {
        this.user_records = response
        for (let i = 0; i < this.user_records.length; i++) {
          getPhones(this.user_records[i]).then(response => {
            this.user_records[i].phones = response
          })
        }
      })
    })
  },
  methods: {
    editContactName(record) {
      let newName = prompt('Enter new name: ')
      if (newName) {
        record.name = newName
      }
      updateRecord(record).then(() => {
        alert('successfully updated')
      })
    },
    updateUserRecord(record) {
      updateRecord(record).then()
    },
    deleteContact(record) {
      if (confirm('Are you sure about deleting whole contact?')) {
        deleteRecord(record).then((res) => {
          alert(res)
          alert('successfully deleted')
        })
      }
    },
    addContact() {
      let newContactName = prompt('Enter new contact name')
      if (newContactName) {
        let newRecord = {}
        newRecord.name = newContactName
        newRecord.user_id = this.curUser.id
        addRecord(newRecord).then(() => {
          alert('successfully added')
        })
      }
    },
    addNumber(recordIndex, number) {
      for (let i = 0; i < this.user_records[recordIndex].phones.length; i++) {
        if (this.user_records[recordIndex].phones[i].number === number) {
          this.user_records[recordIndex].phones[i].push(number);
          break
        }
      }
      this.updateUserRecord(this.user_records)
    },
    editNumber(recordIndex, number) {
      for (let i = 0; i < this.user_records[recordIndex].phones.length; i++) {
        if (this.user_records[recordIndex].phones[i].number === number) {
          this.user_records[recordIndex].phones[i].number = number;
          break
        }
      }
      this.updateUserRecord(this.user_records)
    },
    deleteNumber(recordIndex, number) {
      for (let i = 0; i < this.user_records[recordIndex].phones.length; i++) {
        if (this.user_records[recordIndex].phones[i].number === number) {
          this.user_records[recordIndex].phones.splice(i, 1);
          break
        }
      }
      this.updateUserRecord(this.user_records)
    },
    sortByName() {
      if (this.user_records.length > 1) {
        this.user_records.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      }
    },
    sortByFav() {
      if (this.user_records.length > 1) {
        this.user_records.sort(function (a, b) {
          if (a.favorite < b.favorite) {
            return -1;
          }
          if (a.favorite > b.favorite) {
            return 1;
          }
          return 0;
        });
      }
    }
  }
}
</script>
<style scoped src="../assets/css/homepage.css">
</style>
