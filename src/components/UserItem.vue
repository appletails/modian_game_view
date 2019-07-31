<template>
  <div class="box">
    <div
    class="name"
    v-for="(item, index) in user"
    :key="index"
    @click="$router.push({path:'/user',query:{nickname:item.nickname[0]}})"
    >
      <div>
        <span>{{index+1}}、{{item.nickname[0]}}</span>
        <span v-if="item.nickname[1]">[{{item.nickname[1]}}]</span>
      </div>
      <span>战斗力：{{item.power}}</span>
    </div>
  </div>
</template>

<script>
import { } from '@/filters'
export default {
  name: 'UserItem',
  data () {
    return {
      user: [{nickname: [], power: 0}]
    }
  },
  async created () {
    this.user = await this.$account.getUser()
  }
}
</script>

<style lang="less" scoped>
.box{
  .flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding:10px;
  .name{
    .flex;
    color: @title;
    width: 100%;
    padding: 6px 15px;
    border:1px solid @border;
    margin-bottom: 10px;
    border-radius: 6px;
    font-size: 14px;
  }
}
</style>
