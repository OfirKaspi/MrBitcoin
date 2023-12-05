<template>
    <footer class="app-footer">
        <p>Coffeerights 2023</p>
        <p>{{ $store.getters.contacts?.length }}</p>
    </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.app-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 5vh;
    padding: 10px;
    background-color: lightblue;

    a {
        text-decoration: none;
    }
}
</style>
