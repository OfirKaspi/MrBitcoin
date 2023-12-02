<template>
    <section class="contact-index">
        <ContactFilter @filter="setFilterBy" />
        <h1>contact index</h1>
        <ContactList @remove="removeContact" v-if="contacts" :contacts="filteredContacts" />
        <img v-else src="../assets/puff.svg" alt="" class="loader">
    </section>
</template>

<script>
import { contactService } from '@/services/contact.service.js'

import ContactList from '../cmps/ContactList.vue'
import ContactFilter from '../cmps/ContactFilter.vue'

export default {
    data() {
        return {
            contacts: null,
            filterBy: { txt: '' },
        }
    },
    methods: {
        async removeContact(contactId) {
            await contactService.remove(contactId)

            const idx = this.contacts.findIndex(contact => contact._id === contactId)
            this.contacts.splice(idx, 1)

            // this.contacts = this.contacts.filter(contact => contact._id !== contactId)
            eventBus.emit('user-msg', `Contact ${contactId} deleted...`)
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.fullname))
        }
    },
    async created() {
        this.contacts = await contactService.query()
    },
    components: {
        ContactList,
        ContactFilter
    }
}
</script>

<style lang="scss">
img.loader {
    display: block;
    width: 200px;
    margin: 30px auto;
}
</style>