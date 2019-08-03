<template>
  <li class="line">
    <span>{{item.name}}</span>
    <span>数量：{{item.num}}</span>
  </li>
</template>

<script>
import { stars } from "@/filters";
export default {
  name: "Package",
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
