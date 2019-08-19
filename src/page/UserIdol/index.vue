<template>
  <div>
    <div class="btn_line">
      <Select @filterT="sortIdol" :active="active" />
      <button
        :class="[level.indexOf('UR')>-1?'tail_btn_info':'','tail_btn']"
        @click="levelShow('UR')"
      >UR</button>
      <button
        :class="[level.indexOf('SSR')>-1?'tail_btn_info':'','tail_btn']"
        @click="levelShow('SSR')"
      >SSR</button>
      <button
        :class="[level.indexOf('SR')>-1?'tail_btn_info':'','tail_btn']"
        @click="levelShow('SR')"
      >SR</button>
      <button
        :class="[level.indexOf('R')>-1?'tail_btn_info':'','tail_btn']"
        @click="levelShow('R')"
      >R</button>
      <button
        :class="[level.indexOf('N')>-1?'tail_btn_info':'','tail_btn']"
        @click="levelShow('N')"
      >N</button>
    </div>
    <div class="btn_line">
      <span>已收集：{{idol.length}}/{{allIdolNum}}</span>
    </div>
    <ul>
      <Idol v-for="item in idol" :key="item.nickname" :item="item" :num="showNum" />
    </ul>
  </div>
</template>

<script>
import Idol from "@/components/Idol";
import Select from "@/components/Select";
export default {
  components: {
    Idol,
    Select
  },
  data() {
    return {
      idol: [],
      allIdol: [],
      nickname: [],
      active: null,
      showNum: true,
      level: [ "UR","SSR","SR"],
      reverse: false,
      allIdolO: null
    };
  },
  computed: {
    allIdolNum() {
      if (!this.allIdolO) {
        return 0;
      }
      let sum = 0;
      for (let i in this.level) {
        sum += this.allIdolO[this.level[i]];
      }
      return sum;
    }
  },
  methods: {
    async sortIdol(i) {
      // if (i === this.active) {
      //   this.idol.reverse();
      //   return;
      // }
      const lvUp = { UR: 4, SSR: 3, SR: 2, R: 1, N: 0 };
      this.showNum = true;
      switch (i) {
        case 0:
          this.idol = this.idol.sort(
            (a, b) =>
              lvUp[b.level] - lvUp[a.level] ||
              b.attack - a.attack ||
              b.defense - a.defense ||
              b.life - a.life
          );
          break;
        case 1:
          this.idol = this.idol.sort(
            (a, b) =>
              b.star - a.star ||
              b.attack - a.attack ||
              b.defense - a.defense ||
              b.life - a.life
          );
          break;
        case 2:
          this.idol = this.idol.sort(
            (a, b) =>
             b.attack - a.attack || b.defense - a.defense || b.life - a.life
          );
          break;
        case 3:
          this.idol = this.idol.sort(
            (a, b) =>
              b.defense - a.defense || b.attack - a.attack || b.life - a.life
          );
          break;
        case 4:
          this.idol = this.idol.sort(
            (a, b) =>
              b.life - a.life || b.attack - a.attack || b.defense - a.defense
          );
          break;
        case 5:
          this.idol = this.idol.sort(
            (a, b) =>
              b.num - a.num ||
              b.attack - a.attack ||
              b.defense - a.defense ||
              b.life - a.life
          );
          this.showNum = false;
          break;
        case 6:
          const skills = await this.$account.getSkill();
          this.idol = this.idol.sort(
            (a, b) =>
              skills[b.skill] - skills[a.skill] ||
              b.attack - a.attack ||
              b.defense - a.defense ||
              b.life - a.life
          );
          break;
      }
      this.active = i;
    },
    levelShow(lv) {
      let i = this.level.indexOf(lv);
      if (i > -1) {
        this.level.splice(i, 1);
      } else {
        this.level.push(lv);
      }
      console.log(this.level);
      this.idol = this.allIdol.filter(
        item => this.level.indexOf(item.level) > -1
      );
      this.sortIdol(this.active, false);
    }
  },
  async created() {
    this.nickname = this.$route.query.nickname;
    const response = await this.$account.getUserIdol(this.nickname);
    if (response.code !== 200) {
      alert(`查找失败：${response.msg}`);
      this.$router.go(-1);
    }
    this.allIdol = response.data.idol;
    this.idol = this.allIdol.filter(
      item => this.level.indexOf(item.level) > -1
    );
    this.sortIdol(0);
    this.allIdolO = await this.$account.getAllIdol();
  }
};
</script>

<style lang="less" scoped>
.nickname {
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
}
.btn_line {
  .flex;
  flex-wrap: wrap;
  margin: 10px;
  span {
    font-size: 14px;
    color: @font;
  }
}
ul {
  margin: 10px;
  li {
    font-size: 14px;
    justify-content: flex-start;
    margin-top: 10px;
    border: 1px solid @border;
    border-radius: 6px;
  }
}
.tail_btn_info{
  background-color: @sr;
  border-color: @sr;
}
</style>
