<template>
    <section v-if="msg.txt" class="user-msg">
        <p>{{msg.txt}}</p>
    </section>
</template>

<script>
import { eventBus } from '../services/eventBus.service'

export default {
    data() {
        return {
            msg: { 
                txt: '' ,
                timeout: 1500,
            }
        }
    },
    methods: {
        onUserMsg(payload) {
            this.msg.txt = payload
            setTimeout(() => this.msg.txt = '', this.msg.timeout)
        }
    },
    created() {
        eventBus.on('user-msg', this.onUserMsg)
    },
}
</script>

<style lang="scss">
.user-msg {
    position: fixed;
    top: 63px;
    right: 10px;

    width: max-content;
    padding: 4px 10px;
    background-color: darkcyan;
    border-radius: 4px;
}
</style>