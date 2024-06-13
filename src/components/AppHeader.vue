<template>
    <div class="container d-flex justify-content-between align-items-baseline pt-4">
        <h2>Gianni Saladino</h2>
        <h4><em>FullStack Web Developer</em></h4>
    </div>
    <nav class="d-flex gap-5 fs-5 container pb-1 justify-content-center">
        <RouterLink :class="$route.fullPath === '/' ? 'text-primary' : ''" :to="{ name: 'home' }">HOME
        </RouterLink>
        <RouterLink :class="$route.fullPath === '/portfolio' ? 'text-primary' : ''" :to="{ name: 'portfolio' }">
            PROGETTI
        </RouterLink>
        <RouterLink :class="$route.fullPath === '/contact' ? 'text-primary' : ''" :to="{ name: 'contact' }">
            CONTATTI
        </RouterLink>
    </nav>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
nav {
    a {
        text-decoration: none;
        color: white;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    a:hover {
        color: rgba(0, 162, 255, 0.496);
        transition: 200ms;
    }
}
</style>