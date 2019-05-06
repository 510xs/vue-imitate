<template>
    <div id="interview">
        <!-- 面试记录 -->
        <Navbar title='我的面试' />
        <van-row id="interview-nav">
            <van-col span="12" class="interview-nav_txt">
                <p
                @click="changeType('interviewEd')"
                :class="{active:type == 'interviewEd'}">已面试</p>
            </van-col>
            <van-col span="12" class="interview-nav_txt">
                <p 
                @click="changeType('interviewIng')" 
                :class="{active:type == 'interviewIng'}">将面试</p>
            </van-col>
        </van-row>
        <div class="record-content">
            <Record :record='interviewEd' v-if="type == 'interviewEd'" />
            <Record :record='interviewIng' v-else-if="type == 'interviewIng'" />
        </div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import { Row, Col} from 'vant';
import Record from '../components/Record.vue';

export default {
    name:'interview',
    data(){
        return ({
            interviewEd:{
                data:null,
                msg:`暂时没有已面试的记录`
            },
            interviewIng:{
                data:null,
                msg:`暂时没有将面试的记录`
            },
            type:'interviewIng'
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
#interview{
    z-index: 333;
    position:absolute;
    width: 100%;
    min-height: 100%;
    background-color: #f0f0f0;
}
#interview-nav {
  width:100%;
  line-height: 45px;
  height: 45px;
//   background-color: #f5f5f5;
  border-bottom: 2px solid #f5f5f5;
  .interview-nav_txt{
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 45px;
    text-indent: 3px;
    height:100%;
    color: #555;
    // background-color:#fff;
    p{
        width: 100%;
        height: 100%;
    }
  }
}

.interview-nav-color{
//   background-color:#e7f3f0;
  color:#00b38a;
}
.record-content{
    overflow: hidden;
}

.active{
    color: #00b38a;
    background-color: #fff;
}
</style>

