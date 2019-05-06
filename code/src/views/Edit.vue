<template>
    <div class="edit">
        <!-- 编辑页 -->
        <Navbar title='设置定制信息' />
        <position-choose
            posTitle='职位类型'
            :posType="setEditPosition.name?setEditPosition.name:'请点击这里选择职位'"
            posPath='/edit/editPosition'/>
        <position-choose
            posTitle='工作地点'
            :posType="setCity?setCity:'成都'"
            posPath='/edit/editCity'/>
        <position-choose
            posTitle='期望薪水'
            :posType="setEditPosition.salary?setEditPosition.salary:'没有要求'"
            posPath='/edit/editSalary'/>
        <position-choose
            posTitle='公司规模'
            :posType="setEditPosition.companyType?setEditPosition.companyType:'没有要求'"
            posPath='/edit/editCompany'/>
        <div class="btn-edit-search" @click="goPosition">开始搜索</div>
    </div>
    
</template>

<script>

import Navbar from '../components/Navbar.vue';
import PositionChoose from '../components/PositionChoose.vue';
import { mapGetters } from 'vuex';

export default {
    name:'edit',
    components:{
        Navbar,
        PositionChoose,
    },
    computed:{
        ...mapGetters(['setEditPosition','setCity'])
    },
    methods:{
        goPosition(){
            this.$router.replace('/');
        }
    }
}
</script>

<style lang="less" scoped>
html,body{
    width: 100%;
    height:100%;
}
.edit{
    width: 100%;
    height:100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 333;
    background-color: #fff;
}
.btn-edit-search{
    height: 45px;
    line-height: 45px;
    color: #fff;
    background-color: #00b38a;
    font-size: 1.1rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>


