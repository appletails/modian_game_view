<template>
  <div class="max_box">
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
  height: 100%;
  width: 100%;
}
</style>
