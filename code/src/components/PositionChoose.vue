<template>
    <div class="pos-box">
        <router-link :to='posPath'>
        <p class="pos-title">{{posTitle}}</p>
        <p class="pos-type">{{posType}}</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'positionChoose',
    props:{
        posTitle:String,
        posType:String,
        posPath:String,
    }
}
</script>

<style lang="less" scoped>
.pos-box{
    padding: 20px;
    padding-bottom: 0;
    .pos-title{
        color: #ccc;
        font-size: 0.85rem;
        text-align: left;
    }
    .pos-type{
        margin: 10px 0 0 0;
        text-align: center;
        line-height: 62.5px;
        color: #333;
        font-size: 1.05rem;
        background-color: #f0f0f0;
        border-radius: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>


