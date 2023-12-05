<template>
    <ul class="contact-list">
        <li v-for="contact in contacts" :key="contact._id">
            <ContactPreview :contact="contact" />
            <section class="actions">
                <RouterLink :to="`/contact/${contact._id}`">
                    <button>Details</button>
                </RouterLink>
                <RouterLink :to="`/contact/edit/${contact._id}`">
                    <button>Edit</button>
                </RouterLink>
                <button @click="onRemoveContact(contact._id)">x</button>
            </section>
        </li>
    </ul>
</template>

<script>
import ContactPreview from '../cmps/ContactPreview.vue'

export default {
    props: {
        contacts: {
            type: Array,
            required: true,
        }
    },
    methods: {
        onRemoveContact(contactId) {
            this.$emit('remove', contactId)
        }
    },
    components: {
        ContactPreview,
    }
}
</script>

<style lang="scss" >
.contact-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    margin-block-start: 10px;
    list-style: none;
    padding: 0;
}

.contact-list li {
    display: grid;
    padding: 10px;
    background-color: lightsteelblue;

    button {
        justify-self: end;
    }
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>