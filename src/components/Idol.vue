<template>
  <li>
    <div class="line">
      <div :class="['one',item.life?'':'error']">{{item.nickname}}</div>
      <div class="two">
          <span :class="['level',level]">{{item.level}}</span>
      </div>
      <div class="three icons">
        <i class="icon icon_crown" v-for="i in star[0]" :key="i"></i>
        <i class="icon icon_sun" v-for="i in star[1]" :key="i"></i>
        <i class="icon icon_moon" v-for="i in star[2]" :key="i"></i>
        <i class="icon icon_star" v-for="i in star[3]" :key="i"></i>
      </div>
      <div :class="['fore',item.skill == '未知'?'':'warning']">{{item.skill}}</div>
    </div>
    <div class="line">
      <div class="one icons">
        <i class="icon icon_attack"></i>
        <span>{{item.attack}}</span>
      </div>
      <div class="two icons">
        <i class="icon icon_defense"></i>
        <span>{{item.defense}}</span>
      </div>
      <div class="three icons">
        <i :class="['icon','icon_life',item.life?'':'gray']"></i>
        <span>{{item.life}}/{{item.alllife}}</span>
      </div>
      <div class="fore icons" v-if="$route.name === 'UserInfo'">
        <i class="icon icon_battle"></i>
        <span>{{item.battle}}</span>
      </div>
      <div class="fore" v-else>数量：{{item.num}}</div>
    </div>
  </li>
</template>

<script>
import { stars } from "@/filters";
export default {
  name: "Idol",
  props: ['item'],
  computed:{
    star(){
      let starN = this.item.star % 4
      let moonN = parseInt(this.item.star/4)
      let sunN = parseInt(moonN/4)
      let crownN = parseInt(sunN/4)
      return [crownN,sunN % 4,moonN % 4,starN]
    },
    level(){
      return `level_${this.item.level.toLowerCase()}`
    }
  }
};
</script>

<style lang="less" scoped>
li {
  font-size: 14px;
  justify-content: flex-start;
  margin-top: 10px;
  border: 1px solid @border;
  border-radius: 6px;
  .line {
    .flex;
    div {
      padding: 5px 0;
      line-height: 1.5rem;
      text-align: center;
      &:not(:last-of-type) {
        border-right: 1px solid @border;
      }
    }
    & .icons{
      .flex;
      justify-content: center;
    }
    .one {
      width: 22%;
    }
    .two {
      width: 24%;
    }
    .three {
      width: 31%;
    }
    .fore {
      width: 25%;
    }
    &:first-of-type {
      border-bottom: 1px solid @border;
    }
  }
}
</style>
