<template>
    <!-- <div class="container">
        <h3>Pagina di dettaglio del progetto</h3>
        <p>{{ $route.params.slug }}</p>
        <p>Prop slug: {{ slug }}</p>
        </div> -->
    <button class="btn btn-primary" @click="goBack">
        Indietro
    </button>
    
    <template v-if="project !== null">
        <div class="container">
            <h1>{{ project.name }}</h1>
            <p>{{ project.type.name }}</p>
            <Tecnologies :tecnologies="project.tecnologies" />
            <p>{{ project.date }}</p>
        </div>
    </template>
</template>

<script>
import axios from 'axios'
import Tecnologies from '../components/Tecnologies.vue'
export default {
    components: {
        Tecnologies,
    },
    props: {
        slug: {
            type: String,
            required: true,
        }
    },
    data(){
        return {
            project: null,
        }
    },
    methods: {
        goBack() {
            this.$router.back()
        },
        fetchProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`).then((res) => {
                console.log(res.data.project);
                this.project = res.data.project;
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },
    created() {
        this.fetchProject()
    },
}
</script>

<style lang="scss" scoped></style>