<template>
  <div id="app">
    <LeftSideBar
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    />
    <MainView class="relative mx-0 md:mx-64 sm:ml-64 h-screen" />
    <RightSideBar
      class="fixed top-0 right-0 z-40 w-64 h-screen transition-transform translate-x-full md:translate-x-0"
    />
  </div>
</template>

<script setup>
import LeftSideBar from '../components/LeftSideBar.vue'
import RightSideBar from '../components/RightSideBar.vue'
import MainView from '../components/MainView.vue'
</script>
