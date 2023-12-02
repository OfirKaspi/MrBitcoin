<template>
    <article class="car-preview">
        <h2>{{ contact.fullname }}</h2>
        <p>{{ contact.email }}</p>
        <p>{{ contact.phone }}</p>
    </article>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped></style>