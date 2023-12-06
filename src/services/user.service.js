'use strict'

import { dbService } from './db.service.js'
import { utilService } from './util.service.js'

const KEY = 'users'

export const userService = {
    query,
    update,
    getEmptyUser,
    signup
}

async function query() {
    var users = await dbService.query(KEY)

    console.log(users)
    return users
}

async function update(user) {
    return await dbService.put(KEY, user)
}

async function signup(username) {
    const emptyUser = getEmptyUser()
    const newUser = { ...emptyUser, username }
    console.log('newUser', newUser);
    return await dbService.post(KEY, newUser)
}

function getEmptyUser() {
    return {
        username: "",
        balance: 100,
        transactions: [],
        _id: utilService.makeId()
    }
}
