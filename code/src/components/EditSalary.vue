<template>
    <div class="user-edit">
        <Navbar title='设置定制信息' />
        <div class="edit-header">
            <edit-title editTitle="告诉我你期望的薪水" />
        </div>
        <div v-for="(item,i) in salary" :key="i">
            <p
            class="salary-item"
            @click="getSalary(item)"
            >{{item}}</p>
        </div>
    </div>
</template>

<script>

import Navbar from './Navbar.vue';
import EditTitle from './EditTitle.vue';
import { mapMutations } from 'vuex';

export default {
    name:'editposition',
    data(){
        return ({
            salary:['没有要求','2k以下','2k-5k','5k-10k','10k-15k','15k-25k','25k-50k','50k以上']
        })
    },
    components:{
        Navbar,
        EditTitle,
    },
    methods:{
        ...mapMutations({
            getSalary:'EDIT_POSITION_SALARY'
        })
    }
}
</script>

<style lang="less">
.user-edit{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 333;
}
.edit-header{
    height: 126px;
}
.salary-item{
    height: 44px;
    line-height: 44px;
    color: #666;
    font-size: .95rem;
    border-bottom: 1px solid #e8e8e8;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    text-indent: 10px;
    margin-left: 20px;
}
.salary-item:active{
    
    background-color: #e8e8e8;
}
</style>


