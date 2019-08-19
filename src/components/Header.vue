<template>
  <div class="head">
    <span class="logo" @click="$router.push('/')" />
    <span>{{nickname}}</span>
    <button v-if="nickname !== '摩点小游戏数据'" @click="$router.go(-1)" class="tail_btn">返回</button>
    <span v-else></span>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      nickname: "摩点小游戏数据"
    };
  },
  methods:{
    handlNickname(){
      if (this.$route.name === "Home") {
          this.nickname = "摩点小游戏数据"
        }else{
          this.nickname = this.$route.query.nickname
      }
    }
  },
  watch: {
    '$route': 'handlNickname'
  }
};
</script>

<style lang="less" scoped>
.head {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid @border;
  text-align: center;
  background-color: #fff;
  font-size: 16px;
  color: @title;
  padding: 0 10px;
  .flex;
  span{
    min-width: 54px;
  }
  .logo{
    height: 36px;
    background-image: url(http://www.crean.top/chess/img/logo.jpg);
    background-repeat: no-repeat;
    background-size: 36px auto;
    background-position: left center;
  }
}
</style>
