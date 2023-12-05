<template>
    <header class="edit-header">
        <h1>Contact Edit</h1>
        <RouterLink to="/contact">
            <button>Back</button>
        </RouterLink>
    </header>
    <section v-if="contact" class="contact-edit">
        <form @submit.prevent="onSaveContact">
            <input v-model="contact.fullname" placeholder="Fullname" type="text" autofocus>
            <input v-model.number="contact.email" placeholder="Email" type="email">
            <input v-model.number="contact.phone" placeholder="Phone number" type="text">
            <button>Save</button>
        </form>
    </section>
    <img v-else src="../assets/puff.svg" alt="" class="loader">
</template>

<script>
import { contactService } from '../services/contact.service.js'
import { eventBus } from '../services/eventBus.service.js'
export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async onSaveContact() {
            const isUpdate = !!this.$route.params._id
            console.log(isUpdate);

            try {
                await this.$store.dispatch({ type: 'saveContact', contact: this.contact })
                // await contactService.save(this.contact)

                if (isUpdate) {
                    eventBus.emit('user-msg', 'Contact Updated')
                } else {
                    eventBus.emit('user-msg', 'Contact Saved')
                }
            } catch (err) {
                eventBus.emit('user-msg', `Couldn't save contact`)
            }
            this.$router.push('/contact')
        }
    },
    created() {
        const contactId = this.$route.params._id
        if (contactId) {
            // this.contact = await contactService.get(contactId)
            const contact = this.contacts.find(contact => contact._id === contactId)
            this.contact = JSON.parse(JSON.stringify(contact))
        } else {
            this.contact = contactService.getEmptyContact()
        }
    },
    computed: {
        contacts() { return this.$store.getters.contacts }
    }
}
</script>

<style lang="scss">
.edit-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.contact-edit {
    display: grid;
    padding: 10px;
    background-color: darkseagreen;

    a {
        justify-self: end;
    }
}
</style>