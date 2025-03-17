<template>
    <div>
        <navbar/>
        <main>
            <RouterView />
        </main>
        <footer>
            <p>&copy; 2023 PingMe. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>
import navbar from '../components/navbar.vue';
export default {
    name: 'GuestLayout',
    components: {
        navbar
    },
};
</script>

<style scoped>
</style>
