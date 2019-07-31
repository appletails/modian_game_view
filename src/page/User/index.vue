<template>
  <div>
    <div class="top">
      <div class="nickname">
        <span>{{user.nickname[0]}}</span>
        <span v-if="user.nickname[1]">[{{user.nickname[1]}}]</span>
      </div>
      <button @click="$router.push('/')" class="tail_btn">返回</button>
    </div>
    <div class="btn_line">
        <button :class="[active == 0?'tail_btn_info':'','tail_btn']" @click="paixu(0)">稀有度</button>
        <button :class="[active == 1?'tail_btn_info':'','tail_btn']" @click="paixu(1)">星级</button>
        <button :class="[active == 2?'tail_btn_info':'','tail_btn']" @click="paixu(2)">攻击</button>
        <button :class="[active == 3?'tail_btn_info':'','tail_btn']" @click="paixu(3)">防御</button>
        <button :class="[active == 4?'tail_btn_info':'','tail_btn']" @click="paixu(4)">生命</button>
        <button :class="[active == 5?'tail_btn_info':'','tail_btn']" @click="paixu(5)">数量</button>
        <button :class="[active == 6?'tail_btn_info':'','tail_btn']" @click="paixu(6)">技能</button>
    </div>
    <ul>
      <li v-for="(item, index) in user.idol" :key="index">
        <div>
          <span :class="['one',item.life?'':'error']">{{item.nickname}}</span>
          <span class="two">{{item.level}}</span>
          <span class="three">{{item.star | stars}}</span>
          <span class="fore">数量：{{item.num}}</span>
        </div>
        <div>
          <span class="one">攻：{{item.attack}}</span>
          <span class="two">防：{{item.defense}}</span>
          <span class="three">血：<span :class="[item.life?'':'error']">{{item.life}}</span>/{{item.alllife}}</span>
          <span :class="['fore',item.skill == '未知'?'':'warning']">{{item.skill}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { stars } from '@/filters'
export default {
  components: {
  },
  filters: {stars},
  data () {
    return {
      user: {
        nickname: []
      },
      active: null
    }
  },
  methods: {
    async paixu (i) {
      const lvUp = {UR: 4, SSR: 3, SR: 2, R: 1, N: 0}
      switch (i) {
        case 0:
          this.user.idol = this.user.idol.sort((a, b) => lvUp[b.level] - lvUp[a.level])
          break
        case 1:
          this.user.idol = this.user.idol.sort((a, b) => b.star - a.star)
          break
        case 2:
          this.user.idol = this.user.idol.sort((a, b) => b.attack - a.attack)
          break
        case 3:
          this.user.idol = this.user.idol.sort((a, b) => b.defense - a.defense)
          break
        case 4:
          this.user.idol = this.user.idol.sort((a, b) => b.life - a.life)
          break
        case 5:
          this.user.idol = this.user.idol.sort((a, b) => b.num - a.num)
          break
        case 6:
          const skills = await this.$account.getSkill()
          this.user.idol = this.user.idol.sort((a, b) => {
            return skills[b.skill] - skills[a.skill]
          })
          break
      }
      this.active = i
    }
  },
  async created () {
    const response = await this.$account.getOneUser(this.$route.query.nickname)
    this.user = response.data
  }
}
</script>

<style lang="less" scoped>
.top{
  .flex;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid @border;
  .nickname{
    font-size: 16px;
    font-weight: bold;
  }
}
.btn_line{
  .flex;
  flex-wrap: wrap;
  margin: 10px;
  button{
    margin-bottom: 5px;
  }
}
ul{
  margin: 10px;
  li{
    // .flex;
    font-size: 14px;
    justify-content: flex-start;
    padding: 5px;
    margin-top: 10px;
    border:1px solid @border;
    border-radius: 6px;
    div{
      .flex;
      span{
        padding:5px 0;
        line-height: 1.5rem;
        text-align: center;
        &:not(:last-of-type){
          border-right: 1px solid @border;
        }
      }
      .one{
        width:22%;
      }
      .two{
        width:24%;
      }
      .three{
        width:31%;
      }
      .fore{
        width:25%;
      }
      &:first-of-type{
        border-bottom: 1px solid @border;
      }
    }
  }
}
</style>
