<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
html{
  width: 100%;
  height: 100%;
  // background-image: url(http://www.crean.top/pocket/data/2019/6/wxj/bg.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  // background-color: @primary;
}
body{
  width: 100%;
  height: 100%;
  margin: 0;
}
ul,li{
  list-style:none;
  padding:0;
  margin: 0;
}
#app{
  width: 100%;
  height: 100%;
}
</style>
