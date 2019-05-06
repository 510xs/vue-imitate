<template>
    <div class="user-edit">
        <Navbar title='设置定制信息' />
        <div class="edit-header">
            <edit-title editTitle="对公司的规模可有要求?" />
        </div>
        <div v-for="(item,i) in companyType" :key="i">
            <p
            class="type-item"
            @click="getComanyType(item)">
                <span class="type-item-type">{{item.type}}</span>
                <span class="type-item-about">{{item.about}}</span>
            </p>
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
            companyType:[{
                type:'没有要求',
                about:null,
            },{
                type:'初创型',
                about:'（天使轮及未融资）',
            },{
                type:'成长型',
                about:'（A轮或B轮融资）',
            },{
                type:'成熟型',
                about:'（C轮融资以上但未上市）',
            },{
                type:'上市公司',
                about:null,
            }]
        })
    },
    components:{
        Navbar,
        EditTitle,
    },
    methods:{
        ...mapMutations({
            getComanyType:'EDIT_POSITION_COMPANY'
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
.type-item{
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
.type-item:active{
    background-color: #e8e8e8;
}
.type-item-about{
    color: #cbcbcb;
    margin-left:5px;
}
</style>


