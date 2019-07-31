import axios from 'axios'
// 返回后拦截
axios.interceptors.response.use(
  data => {
    return data
  },
  err => {
    alert(`请求出错：${err}`)
  }
)
export default {
  install: function (Vue) {
    Vue.prototype.$account = {
      user: null,
      getUser: async function () {
        if (!this.user) {
          let data = await axios.get(`http://172.81.250.91:82/chessUser`)
          this.user = data.data
        }
        return this.user
      },
      skill: null,
      getSkill: async function () {
        if (!this.skill) {
          let data = await axios.get(`http://172.81.250.91:82/skill`)
          this.skill = data.data
        }
        return this.skill
      },
      getOneUser: async function (nickname) {
        let response = await axios.post(`http://172.81.250.91:82/oneUser`, {nickname: nickname})
        return response.data
      }
    }
  }
}
