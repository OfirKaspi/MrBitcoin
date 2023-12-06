<template>
    <section>
        <h1>login</h1>
        <input v-model="username" placeholder="Enter your username" type="text">
        <button @click="login">Login</button>
    </section>
</template>

<script>
import { eventBus } from '../services/eventBus.service'


export default {
    data() {
        return {
            username: '',
        }
    },
    computed: {
        users() {
            return this.$store.getters.users
        }
    },
    methods: {
        async login() {
            try {
                if (!this.username) throw new Error('Username is empty..')
                await this.$store.dispatch({ type: 'signup', username: this.username })
                this.$router.push('/home')
                eventBus.emit('user-msg', `Login successfully...`)
            } catch (err) {
                eventBus.emit('user-msg', `Couldn't login...`)
            }
        }
    }
}
</script>

<style lang="scss"></style>