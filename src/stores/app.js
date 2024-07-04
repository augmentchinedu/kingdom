import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'

const api =
  process.env.NODE_ENV >= 'production' ? 'https://kingdomhub.xyz' : 'http://localhost:3000'
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
      const { data } = await axios.get(`${api}/api/app/${this.app.domain}`)
      console.log(data)
      if (data == 'Domain Not Found') router.push('/install')
      else {
        this.app = data
        console.log(this.app)
      }
    },
    async register(form) {
      console.log(form)
      let { data } = await axios.post(`${api}/api/app/register`, form)
      console.log(data)
      if (data == 'Registered') {
        let { data } = await axios.get(`${api}/api/app/${this.app.domain}`)
        this.app = data
        console.log(this.app)
        router.push('/')
      }
    }
  }
})
