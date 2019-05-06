<template>
    <div class="list">
        <div 
            class="company_item" 
            v-for="item in leep" 
            :key="item.companyID"
            @click="changeIsShow([false,item])"
            >
            <div class="company_logo">
                <img :src='item.companyImg' />
            </div>
            <div class="item_infobox">
                <div class="item_info">
                    <p class="item_name">{{item.companyName}}</p>
                    <p class="item_position">{{item.positionName}}[{{item.companyAdress}}]</p>
                    <p class="item_time">今天&nbsp;{{item.time}}</p>
                </div>
                <p class="company_wages">{{item.wages}}</p>
            </div>
        </div>
    </div>
</template>

<script>

import { Button } from 'vant';
import { mapMutations } from 'vuex';

export default {
    name:'CompanyList',
    data(){
        return ({

        })
    },
    props:{
        mas:String,
        leep:Array,
        isShow:Boolean,
    },
    components:{
        [Button.name] : Button
    },
    methods:{
        ...mapMutations({  //显示职位详情
            changeIsShow:'CHANGE_ISSHOW'
        })
    }
}
</script>

<style lang='less'>
.company_item{
    height: 90px;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
}
.company_item:active{
    background-color: #F0F0F0;
}
.company_logo{
    width:60px;
    height:60px;
    margin: 0 10px 0 15px;
    overflow: hidden;
}
.company_logo img{
    width: 100%;
    height: 100%;
}
.item_infobox{
    // width: 75%;
    margin-right: 15px;
    display: flex;
    justify-content:space-between;
    flex: 1;
    align-items: center;
    text-align: left;
}
.item_name{
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 4px;
}
.item_position{
    font-size: 0.85rem;
    margin-bottom: 4px;
}
.item_time{
    font-size: 0.75rem;
}
</style>

