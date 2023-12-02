'use strict'

import { dbService } from './db.service.js'

const KEY = 'contacts'

export const contactService = {
    query,
    getById,
    remove,
    save
}

async function query() {
    var contacts = await dbService.query(KEY)

    console.log(contacts)
    if (!contacts || !contacts.length) {
        contacts = _createDefaultContacts()
        await dbService.insert(KEY, contacts)
    }
    return contacts
}

async function getById(id) {
    return await dbService.get(KEY, id)
}

async function remove(id) {
    return await dbService.remove(KEY, id)
}

async function save(contact) {
    if (contact._id) return await dbService.put(KEY, contact)
    else return await dbService.post(KEY, contact)
}



function _createDefaultContacts() {
    return [{
        _id: "I6ebsuqLXN",
        fullname: "Doris Aubut",
        email: "LSjaardema@tortor.gov",
        phone: "(774)563-9173",
        img: "https://robohash.org/Doris.png"
    },
    {
        _id: "I6ebsuqGGG",
        fullname: "Ofir Kaspi",
        email: "aba@tov.gov",
        phone: "(972)563-1111",
        img: "https://robohash.org/Ofir.png"
    }]
}