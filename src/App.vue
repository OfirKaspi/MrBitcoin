<script >
import UserMsg from './cmps/UserMsg.vue'
import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    UserMsg,
  }
}
</script>

<template>
  <Transition>
    <UserMsg />
  </Transition>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
main {
  background-color: white;
  min-height: 87vh;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>