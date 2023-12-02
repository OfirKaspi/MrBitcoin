'use strict'

import { dbService } from './db.service.js'

const KEY = 'users'

export const userService = {
    getUser,
}

function getUser() {
    return user
}

const user = {
    fullname: "Puki Ben David",
    balance: 100,
    transactions: []
}
