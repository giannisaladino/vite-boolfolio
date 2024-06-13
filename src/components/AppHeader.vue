<template>
    <div>
        <div class="container d-flex justify-content-between align-items-baseline py-3">
            <h3>Gianni Saladino <em>Developer</em></h3>
            <nav class="d-flex gap-3 fs-5">
                <RouterLink :class="$route.fullPath === '/' ? 'text-primary' : ''" to="/">Home</RouterLink>
                <RouterLink :class="$route.fullPath === '/portfolio' ? 'text-primary' : ''" to="/portfolio">Progetti</RouterLink>
                <RouterLink :class="$route.fullPath === '/contact' ? 'text-primary' : ''" to="/contact">Contatti</RouterLink>
            </nav>
        </div>
    </div>
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

</style>