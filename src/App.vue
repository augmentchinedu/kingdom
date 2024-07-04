<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAppStore } from './stores/app.js'

const store = useAppStore()

onMounted(() => store.init())
</script>
