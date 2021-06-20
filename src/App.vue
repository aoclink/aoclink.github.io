<template>
    <!-- <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link :to="{ name: 'room' }">Room</router-link>
    </div> -->
    <TheHeader />
    <router-view />
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
    name: 'app',
    components: {
        TheHeader,
    },
}
</script>

<style lang="scss" scoped>

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
}

</style>
