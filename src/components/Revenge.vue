<template>
  <li class="line">
    <span>{{item.nickname.length === 2?`${item.nickname[0]} | ${item.nickname[1]}`:item.nickname[0]}}</span>
    <span v-if="item.num - item.revenge" class="error">未复仇</span>
    <span v-else>已复仇</span>
  </li>
</template>

<script>
import { stars } from "@/filters";
export default {
  name: "Revenge",
  props: ["item"],
  filters: {
    stars
  }
};
</script>

<style lang="less" scoped>
.line {
  .flex;
  padding: 5px 10px;
}
</style>
