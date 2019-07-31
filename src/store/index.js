import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    week: {
      msg: [],
      man: [
        {dataTime: ['', '']},
        {dataTime: ['', '']}
      ]
    },
    day: [],
    reply: [],
    gift: [],
    idlist: []
  },
  mutations: {
    DAY (state, day) {
      state.day = day
    },
    REPLY (state, reply) {
      state.reply = reply
    },
    WEEK (state, week) {
      state.week = week
    },
    GIFT (state, gift) {
      state.gift = gift
    },
    IDLIST (state, idlist) {
      state.idlist = idlist
    }
  },
  actions: {
    async getDay ({ commit }) {
      const api = Vue.prototype.$account
      const result = await api.getDay()
      commit('DAY', result)
    },
    async getReply ({commit}) {
      const api = Vue.prototype.$account
      const result = await api.getREPLY()
      commit('REPLY', result)
    },
    async getWeek ({commit}) {
      const api = Vue.prototype.$account
      const result = await api.getWeek()
      commit('WEEK', result)
    },
    async getGift ({commit}) {
      const api = Vue.prototype.$account
      const result = await api.getGIFT()
      commit('GIFT', result)
    },
    async getIdlist ({commit}) {
      const api = Vue.prototype.$account
      const result = await api.getIdlist()
      commit('IDLIST', result)
    }
  }
})
