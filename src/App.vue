
<template>
  <section class="bg-dark text-white">
    <header>
      <AppHeader />
    </header>
  </section>

  <main>
    <RouterView />
  </main>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';
export default {
  components: { 
    ProjectCard,
    AppHeader
  },
  data() {
    return {

    }
  }
}

</script>

<style lang="scss">
@use "bootstrap"
</style>
