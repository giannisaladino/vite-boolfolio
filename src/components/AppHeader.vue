<template>
    <div>
        <div class="container d-flex justify-content-between align-items-baseline py-3">
            <div class="d-flex align-items-baseline gap-3">
                <h2>Gianni Saladino</h2> <h4><em>FullStack Web Developer</em></h4>
            </div>
            <nav class="d-flex gap-3 fs-5">
                <RouterLink :class="$route.fullPath === '/' ? 'text-primary' : ''" to="/">Home</RouterLink>
                <RouterLink :class="$route.fullPath === '/portfolio' ? 'text-primary' : ''" to="/portfolio">Progetti
                </RouterLink>
                <RouterLink :class="$route.fullPath === '/contact' ? 'text-primary' : ''" to="/contact">Contatti
                </RouterLink>
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
nav {
    a {
        text-decoration: none;
        color: white;
    }
}
</style>