<template>
    <h1>Contact Details</h1>
    <section v-if="contact" class="contact-details">
        <img :src="contact.img">
        <h2>{{ contact.fullname }}</h2>
        <p>{{ contact.email }}</p>
        <p>{{ contact.phone }}</p>
        <RouterLink to="/contact">
            <button>Back</button>
        </RouterLink>
    </section>
    <img v-else src="../assets/puff.svg" alt="" class="loader">
</template>

<script>
import { contactService } from '../services/contact.service.js'
export default {
    data() {
        return {
            contact: null,
        }
    },
    async created() {
        const contactId = this.$route.params.contactId
        this.contact = await contactService.getById(contactId)
    }
} 
</script>

<style lang="scss">
.contact-details {
    display: grid;
    padding: 10px;
    background-color: rgb(252, 215, 147);

    a {
        justify-self: end;
    }
}
</style>