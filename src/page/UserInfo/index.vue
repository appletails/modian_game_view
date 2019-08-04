<template>
  <div>
    <div class="line_title"># 出站阵容
        <button @click="$router.push({path:'/UserIdol',query:{nickname:nickname}})" class="tail_btn">全部角色</button>
    </div>
    <ul>
      <Idol v-for="(item, index) in idol" :key="index" :item="item"/>
    </ul>
    <div class="line_title" v-if="packages.length"># 我的道具</div>
    <ul>
      <Package v-for="(item, i) in packages" :key="i" :item="item"/>
    </ul>
    <div class="line_title" v-if="revenge.length"># 我的仇人</div>
    <ul>
      <Revenge v-for="(item, i) in revenge" :key="i" :item="item"/>
    </ul>
  </div>
</template>

<script>
import Idol from "@/components/Idol";
import Package from "@/components/Package";
import Revenge from "@/components/Revenge";
export default {
  components: {
    Idol,
    Package,
    Revenge
  },
  data() {
    return {
      idol: [],
      packages: [],
      revenge: [],
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
    this.packages = response.data.package
    this.revenge = response.data.revenge.sort((a,b)=>{
      return (a.num-a.revenge)-(b.num-b.revenge)
    })
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
