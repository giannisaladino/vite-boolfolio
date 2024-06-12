<template>
    <!-- <AppMain /> -->
     <ProjectCard />
</template>

<script>
import AppMain from './components/AppMain.vue';
import ProjectCard from './components/ProjectCard.vue';
export default {
  components: {
    AppMain,
    ProjectCard
  },
  data() {
    return {

    }
  }
}

</script>

<style lang="scss">
// @use "./style/general.scss";
@use "bootstrap"
</style>
