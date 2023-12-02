<template>
    <header class="app-header">
        <div>
            <div v-if="user">
                <h3>Hello, {{ user.fullname }}</h3>
                <p>Your balance is: {{ user.balance }}</p>
            </div>
            <h3 v-else>Hello, guest</h3>
        </div>
        <nav>
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
</template>

<script>
import { userService } from '@/services/user.service.js'

export default {

    data() {
        return {
            user: null,
        }
    },
    async created() {
        this.user = await userService.getUser()
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
