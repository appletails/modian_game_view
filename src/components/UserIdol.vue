<template>
  <div>
    <div class="line">
      <span :class="['one',item.life?'':'error']">{{item.nickname}}</span>
      <span class="two">{{item.level}}</span>
      <span class="three">{{item.star | stars}}</span>
      <span class="fore">数量：{{item.num}}</span>
    </div>
    <div class="line">
      <span class="one">攻：{{item.attack}}</span>
      <span class="two">防：{{item.defense}}</span>
      <span class="three">
        血：
        <span :class="[item.life?'':'error']">{{item.life}}</span>
        /{{item.alllife}}
      </span>
      <span :class="['fore',item.skill == '未知'?'':'warning']">{{item.skill}}</span>
    </div>
  </div>
</template>

<script>
import { stars } from "@/filters";
export default {
  name: "UserIdol",
  props: ["item"],
  filters: {
    stars
  }
};
</script>

<style lang="less" scoped>
.line {
  .flex;
  span {
    padding: 5px 0;
    line-height: 1.5rem;
    text-align: center;
    &:not(:last-of-type) {
      border-right: 1px solid @border;
    }
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
</style>
