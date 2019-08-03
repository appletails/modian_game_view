<template>
  <div>
    <div class="top">
      <div class="nickname">
        <span>{{nickname}}</span>
      </div>
      <button @click="$router.go(-1)" class="tail_btn">返回</button>
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
      <Idol v-for="(item, index) in idol" :key="index" :item="item"/>
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
      nickname: [],
      active: null
    };
  },
  methods: {
    async paixu(i) {
      const lvUp = { UR: 4, SSR: 3, SR: 2, R: 1, N: 0 };
      switch (i) {
        case 0:
          this.allIdol = this.allIdol.sort(
            (a, b) =>
              lvUp[b.level] - lvUp[a.level] ||
              b.attack - a.attack ||
              b.defense - a.defense ||
              b.life - a.life
          );
          break;
        case 1:
          this.allIdol = this.allIdol.sort(
            (a, b) =>
              b.star - a.star ||
              b.attack - a.attack ||
              b.defense - a.defense ||
              b.life - a.life
          );
          break;
        case 2:
          this.allIdol = this.allIdol.sort(
            (a, b) =>
              b.attack - a.attack || b.defense - a.defense || b.life - a.life
          );
          break;
        case 3:
          this.allIdol = this.allIdol.sort(
            (a, b) =>
              b.defense - a.defense || b.attack - a.attack || b.life - a.life
          );
          break;
        case 4:
          this.allIdol = this.allIdol.sort(
            (a, b) =>
              b.life - a.life || b.attack - a.attack || b.defense - a.defense
          );
          break;
        case 5:
          this.allIdol = this.allIdol.sort(
            (a, b) =>
              b.num - a.num ||
              b.attack - a.attack ||
              b.defense - a.defense ||
              b.life - a.life
          );
          break;
        case 6:
          const skills = await this.$account.getSkill();
          this.allIdol = this.allIdol.sort(
            (a, b) =>
              skills[b.skill] - skills[a.skill] ||
              b.attack - a.attack ||
              b.defense - a.defense ||
              b.life - a.life
          );
          break;
      }
      this.active = i;
    }
  },
  async created() {
    this.nickname = this.$route.query.nickname;
    const response = await this.$account.getUserIdol(this.nickname);
    if (response.code !== 200) {
      alert(`查找失败：${response.msg}`);
      this.$router.go(-1);
    }
    this.idol = response.data.idol
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
