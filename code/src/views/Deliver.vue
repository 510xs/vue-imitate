<template>
    <div class="deliver">
        <!-- 投递记录 -->
        <Navbar title='投递记录' />
        <van-row id="deliver-nav">
            <van-col span="8" class="deliver-nav_txt">
                <p
                @click="changeType('All')"
                :class="{active:type == 'All'}">全部</p>
            </van-col>
            <van-col span="8" class="deliver-nav_txt">
                <p 
                @click="changeType('Ask')" 
                :class="{active:type == 'Ask'}">邀请面试</p>
            </van-col>
            <van-col span="8" class="deliver-nav_txt" @click="changeType('Inappropriate')">
                <p 
                @click="changeType('Inappropriate')" 
                :class="{active:type == 'Inappropriate'}">不合适</p>
            </van-col>
        </van-row>
        <div class="record-content">
            <Record :record='allInfo' v-if="type == 'All'" />
            <Record :record='askInfo' v-else-if="type == 'Ask'" />
            <Record :record='noInfo' v-else-if="type == 'Inappropriate'" />
        </div>
    </div>
</template>

<script>

import { Row, Col} from 'vant';
import Navbar from '../components/Navbar.vue';
import Record from '../components/Record.vue';

export default {
    name:'deliver',
    data(){
        return ({
            allInfo:{
                data:null,
                msg:'暂无数据~'
            },
            askInfo:{
                data:null,
                msg:'暂无数据~'
            },
            noInfo:{
                data:null,
                msg:'暂无数据~'
            },
            type:'All'
        })
    },
    components:{
        [Row.name]:Row,
        [Col.name]:Col,
        Navbar,
        Record,
    },
    methods:{
        changeType(now){
            this.type = now;
        }
    }
}
</script>

<style lang="less" scoped>
.deliver{
    z-index: 333;
    position:absolute;
    width: 100%;
    min-height: 100%;
    background-color:#fff;
}
#deliver-nav {
  width:100%;
  line-height: 45px;
  height: 45px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  .deliver-nav_txt{
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 45px;
    text-indent: 3px;
    height:100%;
    color: #555;
    background-color:#fff;
    p{
        width: 100%;
        height: 100%;
    }
  }
}

.deliver-nav-color{
  background-color:#e7f3f0;
  color:#00b38a;
}
.record-content{
    overflow: hidden;
}

.active{
    color: #00b38a;
    background-color: #f5f5f5;
}
</style>

