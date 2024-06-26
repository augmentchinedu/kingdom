<template>
  <div>
    <div>Domain Name:{{ app.app.domain }}</div>
    <div>Email:{{ app.app.email }}</div>
    <div>Registered:{{ app.app.registered }}</div>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useAppStore } from '../stores/app'

const app = useAppStore()

console.log(app)
</script>
