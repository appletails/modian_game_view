<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style lang="less">
html{
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
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
