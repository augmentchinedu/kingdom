<template>
  <div>
    <div>Installation Page</div>
    <div>
      <div>Domain: <input v-model="form.domain" /></div>
      <div>Email: <input v-model="form.email" /></div>
      <div>Password: <input v-model="form.password" /></div>
      <div><button @click="submit">Submit</button></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '../stores/app'
const store = useAppStore()

const form = ref({
  domain: window.location.hostname,
  email: 'email',
  password: ''
})
function submit() {
  console.log('Form Submitted', form.value)
  store.register(form.value)
}
</script>
