<template>
    <div id="record">
        <div v-if="record.data">有数据{{record}}</div>
        <div v-else class="noInfo">{{record.msg}}</div>
    </div>
</template>

<script>
export default {
    name:'record',
    props:{
        record:Object
    }
}
</script>

<style lang="less" scoped>
#record{
    margin: 15px;
}
.noInfo{
    padding-top: 30px;
    color: #c2cfcc;
}
</style>

