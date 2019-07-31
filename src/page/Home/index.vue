<template>
  <div class="max_box">
    <div class="head">摩点小游戏数据</div>
    <UserItem v-if="user"/>
  </div>
</template>

<script>
import UserItem from '@/components/UserItem'
import { datetamp, timestamp, cent } from '@/filters'
export default {
  components: {
    UserItem
  },
  filters: {datetamp, timestamp, cent},
  data () {
    return {
      user: null
    }
  },
  async created () {
    this.user = await this.$account.getUser()
  },
  watch: {
  }
}
</script>

<style lang="less" scoped>
.max_box{
  .head{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid @border;
    text-align: center;
    background-color: #fff;
    font-size: 16px;
    color:@title;
  }
  height: 100%;
  width: 100%;
}
</style>
