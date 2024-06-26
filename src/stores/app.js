import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../Desktop/router'

export const useAppStore = defineStore('app', {
  state: () => ({
    app: {
      domain: window.location.hostname
    },
    account: {}
  }),

  getters: {},

  actions: {
    async init() {
      console.log('App Initialized')
      const { data } = await axios.get(`http://localhost:3000/api/app/${this.app.domain}`)
      console.log(data)
      if (data == 'Domain Not Found') router.push('/install')
      else {
        this.app = data
        console.log(this.app)
      }
    },
    async register(form) {
      console.log(form)
      let { data } = await axios.post('http://localhost:3000/api/app/register', form)
      console.log(data)
      if (data == 'Registered') {
        let { data } = await axios.get(`http://localhost:3000/api/app/${this.app.domain}`)
        this.app = data
        console.log(this.app);
        router.push('/')
      }
    }
  }
})
