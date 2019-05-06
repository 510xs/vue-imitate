<template>
    <div class="edit-title">
        <em>“</em>
        <p class="edit-title-txt">
            {{editTitle}}
        </p>
        <em class="title-txt-right">”</em>
    </div>
</template>

<script>

export default {
    name:'editposition',
    props:{
        editTitle:String,
    },
}
</script>

<style lang="less">
.edit-title{
    height: 126px;
    background-image: url(https://www.lgstatic.com/images/mobile/asset/common/img/back-info.jpg);
    display: flex;
    justify-content: center;
    align-items: center;
    .edit-title-txt{
        color: #00b38a;
        font-size: 1.4rem;
    }
    em{
        color: #00b38a;
        font-size: 3rem;
        margin: 0 10px;
    }
    .title-txt-right{
        margin-top: 50px;
    }
}
</style>


