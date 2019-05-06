<template>
    <div class="edit-city">
        <Navbar title='设置定制信息' />
        <div class="edit-header">
            <edit-title editTitle="告诉我你期望的工作地点?" />
        </div>
        <City path='/edit' />
    </div>
</template>

<script>

import Navbar from './Navbar.vue';
import EditTitle from './EditTitle.vue';
import City from './City.vue';

export default {
    name:'editcity',
    components:{
        Navbar,
        EditTitle,
        City,
    }
}
</script>

<style lang="less">
.edit-city{
    position:absolute;
    width: 100%;
    background-color: #fff;
    overflow-y: scroll;
    z-index: 333;
}
.edit-header{
    height: 126px;
}
.rinputer{
    height: 50px;
    line-height: 50px;
    border: 1px solid #e8e8e8;
    display: flex;
    .inputer{
        width: 80%;
        margin-left: 23px;
        border: 0;
    }
    .button{
        width: 20%;
        height: 50px;
        border-left: 1px solid #e8e8e8;
        text-align: center;
    }
}
.button:active{
    
    background-color: #e8e8e8;
}
</style>


