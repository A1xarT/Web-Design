export async function getAllUsers() {
    const response = await fetch('/api/all-users');
    return await response.json();
}

export async function postUserMail(mail) {
    const response = await fetch('/api/user', {
        method: 'POST',
        body: mail
    });
    return await response.json()
}

export async function getUser() {
    const response = await fetch('/api/get-user');
    return await response.json();
}

export async function getUserUpdated() {
    const response = await fetch('/api/update-user');
    return await response.json();
}

export async function findByMail(mail) {
    postUserMail(mail).then()
    return getUser()
}

export async function postUser(user) {
    const response = await fetch('/api/full-user', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    return await response.json()
}

export async function updateUser(user) {
    postUser(user).then()
    return getUserUpdated()
}

export async function getRecords() {
    const response = await fetch('/api/get-records');
    return await response.json();
}

export async function getUserRecords(user) {
    postUser(user).then()
    return getRecords()
}

export async function postRecord(record) {
    const response = await fetch('/api/user-record', {
        method: 'POST',
        body: JSON.stringify(record)
    });
    return await response.json()
}

export async function getRecordAdded() {
    const response = await fetch('/api/add-record');
    return await response.json();
}

export async function addRecord(record) {
    await postRecord(record).then()
    return getRecordAdded()
}

export async function getRecordUpdated() {
    const response = await fetch('/api/update-record');
    return await response.json();
}

export async function updateRecord(record) {
    postRecord(record).then()
    return getRecordUpdated()
}

export async function getRecordDeleted() {
    const response = await fetch('/api/delete-record');
    return await response.json();
}

export async function deleteRecord(record) {
    postRecord(record).then()
    return getRecordDeleted()
}

export async function getRecordPhones() {
    const response = await fetch('/api/get-record-numbers');
    return await response.json();
}

export async function getPhones(record) {
    postRecord(record).then()
    return getRecordPhones()
}
export async function getUserRegistered(){
    const response = await fetch('/api/register-user');
    return await response.json();
}
export async function addUser(user){
    postUser(user).then()
    return getUserRegistered()
}
export default class UserList {
    constructor() {
        this.users = []
        this.initUsers()
    }

    initUsers() {
        getAllUsers().then(response => {
            this.users = response
        })
    }

    getUsers() {
        return this.users
    }
}
