<template>
  <div class="select">
    <button class="tail_btn_info tail_btn" @click.stop="actShow = !actShow"><span>{{btnTitle}}</span><i class="icon icon_down"/></button>
    <div class="select_main" v-if="actShow">
        <button
        v-for="coupon in couponList"
        :class="[active == coupon.id?'tail_btn_info':'','tail_btn']"
        @click.stop="filterT(coupon.id)"
        :key="coupon.id"
        >{{coupon.name}}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Select",
  props:{
    active:{
        type:Number,
        default: 0
    }
  },
  data() {
    return {
      actShow:false,
      couponList: [
        { id: 0, name: "稀有度" },
        { id: 1, name: "星级" },
        { id: 2, name: "攻击" },
        { id: 3, name: "防御" },
        { id: 4, name: "生命" },
        { id: 5, name: "数量" },
        { id: 6, name: "技能" }
      ]
    };
  },
  computed:{
      btnTitle(){
          if(this.active != null){
              return this.couponList.filter( i => i.id == this.active)[0].name
          }
      }
  },
  methods: {
    filterT(id) {
      this.$emit("filterT", id);
      this.actShow = !this.actShow
    }
  },
  mounted(){
        var that=this;//this的指向问题
        document.addEventListener('click',function(e){
            that.actShow=false;  //这里that代表组件，this代表document         
        })
    },
};
</script>
<style lang="less" scoped>
button{
    width: 90px;
    display: block;
    .flex;
    justify-content: center;
}
.tail_btn{
    padding-left: 0;
    padding-right: 0;
}
.select{
    position: relative;
    .select_main{
        border-radius: 4px;
        box-shadow: 0 0 10px @border;
        background-color: #fff;
        position: absolute;
        top: 0;
        button{
            border: none;
        }
    }
}
</style>
