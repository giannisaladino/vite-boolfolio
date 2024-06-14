<template>
    <ul class="d-flex gap-3">
      <li class="" v-for="tecnology in tecnologies" :key="tecnology.id">
        {{ tecnology.name }}
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      tecnologies: {
        type: Array,
        required: true
      }
    }
  }
  </script>