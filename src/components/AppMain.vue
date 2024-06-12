<template>
    <div>
        <h2>PROGETTI:</h2>
    </div>
    <div>
        <ul>
            <li v-for="project in projects" :key="project.id" >
                <h3>{{ project.name }}</h3>
                <p>{{ project.slug }}</p>
                <p>{{ project.date }}</p>
            </li>
        </ul>
    </div>
</template>

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

<style lang="scss" scoped>

</style>