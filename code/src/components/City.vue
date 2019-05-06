<template>
    <div>
        <div v-for="list in cityList" :key="list.name">
            <div class="city_title">{{list.name}}</div>
            <div class="city_box">
                <div 
                class="city_item" 
                v-for="item in list.cities" 
                :key='item.cityid'
                 @click="onCity(item)">
                 <router-link :to=path style="color: #333;">
                    {{item.name}}
                 </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import city from '../api/condition/city.js';
import { mapMutations } from 'vuex';

export default {
    name:'city',
    data(){
        return ({
            cityList:city
        })
    },
    props:{
        path:String
    },
    methods:{
        ...mapMutations({
            onCity:'CITY',
        })
    }
}
</script>

<style lang="less" scoped>
.city_title{
    border-bottom: 1px solid #e8e8e8;
    line-height: 25px;
    padding: 0 15px;
    font-size: .85rem;
    color: #888;
    text-align: left;
}
.city_box{
    padding: 0 15px;
    border-bottom: 1px solid #e8e8e8;
    display: flex;
    flex-wrap: wrap;
    .city_item{
        width: 33.33%;
        line-height: 60px;
        text-align: center;
        font-size: 1rem;
        color: #333;
    }
}
.city_item:active{
    background-color: #E7F3F0;
}
</style>


