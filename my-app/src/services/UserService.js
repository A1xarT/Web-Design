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
