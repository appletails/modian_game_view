<template>
  <div>
    <div class="top">
      <div class="nickname">
        <span>{{nickname}}</span>
      </div>
      <button @click="$router.push('/')" class="tail_btn">返回</button>
    </div>
    <div class="btn_line">
      <button :class="[active == 0?'tail_btn_info':'','tail_btn']" @click="paixu(0)">稀有度</button>
      <button :class="[active == 1?'tail_btn_info':'','tail_btn']" @click="paixu(1)">星级</button>
      <button :class="[active == 2?'tail_btn_info':'','tail_btn']" @click="paixu(2)">攻击</button>
      <button :class="[active == 3?'tail_btn_info':'','tail_btn']" @click="paixu(3)">防御</button>
      <button :class="[active == 4?'tail_btn_info':'','tail_btn']" @click="paixu(4)">生命</button>
      <button :class="[active == 5?'tail_btn_info':'','tail_btn']" @click="paixu(5)">数量</button>
      <button :class="[active == 6?'tail_btn_info':'','tail_btn']" @click="paixu(6)">技能</button>
    </div>
    <ul>
      <li v-for="(item, index) in user.idol" :key="index">
        <UserIdol :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import UserIdol from "@/components/UserIdol";
export default {
  components: {
    UserIdol
  },
  data() {
    return {
      user: {},
      nickname: [],
      active: null
    };
  },
  methods: {
    async paixu(i) {
      const lvUp = { UR: 4, SSR: 3, SR: 2, R: 1, N: 0 };
      switch (i) {
        case 0:
          this.user.idol = this.user.idol.sort(
            (a, b) => lvUp[b.level] - lvUp[a.level]
          );
          break;
        case 1:
          this.user.idol = this.user.idol.sort((a, b) => b.star - a.star);
          break;
        case 2:
          this.user.idol = this.user.idol.sort((a, b) => b.attack - a.attack);
          break;
        case 3:
          this.user.idol = this.user.idol.sort((a, b) => b.defense - a.defense);
          break;
        case 4:
          this.user.idol = this.user.idol.sort((a, b) => b.life - a.life);
          break;
        case 5:
          this.user.idol = this.user.idol.sort((a, b) => b.num - a.num);
          break;
        case 6:
          const skills = await this.$account.getSkill();
          this.user.idol = this.user.idol.sort((a, b) => {
            return skills[b.skill] - skills[a.skill];
          });
          break;
      }
      this.active = i;
    }
  },
  async created() {
    this.nickname = this.$route.query.nickname;
    const response = await this.$account.getOneUser(this.nickname);
    if (response.code !== 200) {
      alert(`查找失败：${response.msg}`);
      this.$router.go(-1);
    }
    this.user = response.data;
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
