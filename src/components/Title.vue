<template>
    <div class="line_title">
        <span>{{title}}</span>
        <slot name="btn" />
    </div>
</template>
<script>
export default {
    name:"Title",
    props:{
        title:{
            type:String,
            default:"# 出站阵容"
        }
    }
}
</script>
<style lang="less" scoped>

</style>


