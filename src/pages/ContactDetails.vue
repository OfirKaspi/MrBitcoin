<template>
    <h1>Contact Details</h1>
    <section v-if="contact" class="contact-details">
        <img :src="'https://robohash.org/' + contact.fullname + '.png'">
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
export default {
    data() {
        return {
            contact: null,
        }
    },
    computed: {
        contacts() { return this.$store.getters.contacts }
    },
    async created() {
        const contactId = this.$route.params._id
        this.contact = this.contacts.find(contact => contact._id === contactId)
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