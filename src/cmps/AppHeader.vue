<template>
    <header class="app-header">
        <div>
            <div v-if="currUser">
                <h3>Hello, {{ currUser.username }}</h3>
                <p>Your balance is: {{ currUser.balance }}</p>
            </div>
            <h3 v-else>Hello, guest</h3>
        </div>
        <nav>
            <RouterLink to="/home">Home</RouterLink> |
            <RouterLink to="/contact">Contacts</RouterLink> |
            <RouterLink to="/stats">Stats</RouterLink> |
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
</template>

<script>
export default {
    computed: {
        currUser() {
            return this.$store.getters.currUser
        }
    },
    async created() {
        try {
            this.$store.dispatch({ type: 'loadUsers' })
        } catch (err) {
            eventBus.emit('user-msg', `Couldn't get contacts...`)
        }
    },
}
</script>

<style lang="scss">
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;

    padding: 10px;
    background-color: lightblue;

    a {
        text-decoration: none;
    }

    .router-link-exact-active {
        color: white;
    }
}
</style>
