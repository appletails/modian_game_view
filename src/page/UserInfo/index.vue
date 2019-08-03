<template>
  <div>
    <div class="top">
      <div class="nickname">
        <span>{{nickname}}</span>
        <button @click="showIdol = !showIdol" class="tail_btn">阵容</button>
      </div>
      <button @click="$router.push('/')" class="tail_btn">返回</button>
    </div>
    <ul>
      <li v-for="(item, index) in allIdol" :key="index">
        <Idol :item="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Idol from "@/components/Idol";
export default {
  components: {
    Idol
  },
  data() {
    return {
      idol: [],
      allIdol: [],
      nickname: [],
      active: null
    };
  },
  methods: {
  },
  async created() {
    this.nickname = this.$route.query.nickname;
    const response = await this.$account.getUserInfo(this.nickname);
    if (response.code !== 200) {
      alert(`查找失败：${response.msg}`);
      this.$router.go(-1);
    }
    this.idol = response.data.idol
    this.allIdol = response.data.idol.concat(response.data.otherIdol);
  }
};
</script>

<style lang="less" scoped>
.top {
  .flex;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid @border;
  .nickname {
    font-size: 16px;
    font-weight: bold;
  }
}
.btn_line {
  .flex;
  flex-wrap: wrap;
  margin: 10px;
  button {
    margin-bottom: 5px;
  }
}
ul {
  margin: 10px;
  li {
    // .flex;
    font-size: 14px;
    justify-content: flex-start;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid @border;
    border-radius: 6px;
  }
}
</style>
