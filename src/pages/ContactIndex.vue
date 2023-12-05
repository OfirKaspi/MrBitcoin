<template>
    <section class="contact-index">
        <ContactFilter @filter="setFilterBy" />
        <RouterLink to="contact/edit">
            <button>Add a Contact</button>
        </RouterLink>
        <ContactList @remove="removeContact" v-if="contacts" :contacts="filteredContacts" />
        <img v-else src="../assets/puff.svg" alt="" class="loader">
    </section>
</template>

<script>
import { eventBus } from '../services/eventBus.service'

import ContactList from '../cmps/ContactList.vue'
import ContactFilter from '../cmps/ContactFilter.vue'

export default {
    data() {
        return {
            // contacts: null,
            filterBy: { txt: '' },
        }
    },
    methods: {
        async removeContact(contactId) {
            try {
                await this.$store.dispatch({ type: 'removeContact', contactId })
                eventBus.emit('user-msg', `Contact ${contactId} deleted...`)
            } catch (err) {
                eventBus.emit('user-msg', `Couldn't remove contact...`)
            }
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        contacts() {
            return this.$store.getters.contacts
        },
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.fullname))
        }
    },
    async created() {
        try {
            this.$store.dispatch({ type: 'loadContacts' })
            // this.contacts = await contactService.query()
        } catch (err) {
            eventBus.emit('user-msg', `Couldn't get contacts...`)
        }
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