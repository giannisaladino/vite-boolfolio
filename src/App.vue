<template>
    <AppHeader />
    <ProjectCard />
</template>

<script>
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';
export default {
  components: {
    AppMain,
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
