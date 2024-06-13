<script>
import axios from 'axios';
export default {
    data() {
        return {
            projects: [],
        }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects').then(res => {
                console.log(res.data.results);
                this.projects = res.data.results;
            })
        }
    },
    created() {
        this.fetchProjects();
    },
}
</script>

<template>
    <div class="container mt-5">
        <div class="row gy-3"> 
            <div v-for="project in projects" :key="project.id" class="col-3">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title text-primary">{{ project.name }}</h5>
                        <p class="card-text">{{ project.slug }}</p>
                        <a href="#" class="btn btn-primary">{{ project.date }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>