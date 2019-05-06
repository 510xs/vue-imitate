<template>
    <div>
        <!-- 邀约 -->
        <Navbar title='拉勾网' />
        <div class="invite">
            <van-icon 
            name="info-o" 
            size='35px'
            class="icon-info" />
            <p class="invite-txt">
                开启拉勾PLUS（邀约功能）,将自己匿名展示给职位发布者,并可以收到来自企业的主动邀请;关闭此功能你将不会被任何企业发现,但可能会错过匹配的职位。
            </p>
            <div class="plusbtn">
                <span>已关闭</span>
                <van-switch
                    v-model="checked"
                    active-color="#07c160"
                    inactive-color="#5E5E5E"/>
            </div>
        </div>
        <div v-for="(item,i) in msgList" :key="i" class="explain">
            <p v-if="i%2==0" class="txt-top">{{item}}</p>
            <p v-if="i%2==1" class="txt-ind">{{item}}</p>
        </div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import { Icon,Switch } from 'vant';

export default {
    name:'invite',
    components:{
        [Icon.name]:Icon,
        Navbar,
    },
    data() {
        return ({
        checked: false,
        msgList:['1.本功能暂时只对部分拉勾认证企业开放，',' 不必担心被海量邀请骚扰。','2.不想被某些企业搜到？',' 你可以自由设置想屏蔽的企业。','3.投递简历后，企业会根据你的完整简历',' 来决定是否邀请你参加面试。']
        });
    }
}
</script>

<style lang="less" scoped>
.invite{
    box-sizing: border-box;
    height: 205px;
    border: 1px solid #c7f3e9;
    background-color: #eafffa;
    margin: 15px;
}

.icon-info{
    color: #00b38a;
    margin-top: 15px;
}
.invite-txt{
    margin: 5px 10px;
    text-align: left;
    text-indent: 2em;
    line-height: 1.3rem;
    font-size: .93rem;
}
.plusbtn{
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: #3f4e4b;
    margin-top: 15px;
    span{
        margin-right: 10px;
    }
}
.explain{
    text-align: left;
    margin: 0 15px;
    line-height: 20px;
    color: #aaa;
    font-size: .9rem;
}
.txt-top{
    margin-top: 10px;
}
.txt-ind{
    text-indent: 1rem;
}
</style>


