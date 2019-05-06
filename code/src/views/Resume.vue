<template>
    <div class="resume">
        <Navbar title="简历" />
        <div class="resume-box" v-for="item in (setResume?setResume:null)" :key="item.userID">
            <!-- {{resume(setUserInfo)}} -->
            <div class="resume_title">
                <div>
                    <img :src="item.userImg" alt="" />
                </div>
                <!-- {{item.userImg}} -->
            </div>
            <p class="user-name">
                <span>{{item.userName}}</span>
                <i :class="{man:(item.userSex==1),wman:(item.userSex==2)}"></i>
            </p>
            <p class="user-txt">
                {{item.describe}}
            </p>
            <div class="resume-content">
                <div class="content-title">
                    <i></i>
                    基本信息
                </div>
                <div class="user-resume">
                    <p><span class="user-resume-title">最高学历：</span><span>{{education(item)}}</span></p>
                    <p><span class="user-resume-title">工作年限：</span><span>{{workExper(item)}}</span></p>
                    <p><span class="user-resume-title">所在城市：</span><span>{{item.city}}</span></p>
                    <p><span class="user-resume-title">联系电话：</span><span>{{item.tel}}</span></p>
                    <p><span class="user-resume-title">联系邮箱：</span><span>{{item.email}}</span></p>
                </div>
            </div>
            <div class="resume-content">
                <div class="content-title">
                    <i></i>
                    教育经历
                </div>
                <div class="user-resume">
                    <p><span class="user-resume-title">{{item.graduationTime}}毕业</span><span></span></p>
                    <p><span class="user-resume-title"></span><span>{{item.graduationSchool}}</span></p>
                    <p><span class="user-resume-title">{{education(item)}}·{{item.major}}</span><span></span></p>
                </div>
            </div>
            <div class="resume-content">
                <div class="content-title">
                    <i></i>
                    自我描述
                </div>
                <div class="user-resume">
                    <p><span>{{item.describe}}</span></p>
                </div>
            </div>
            <div class="resume-content">
                <div class="content-title">
                    <i></i>
                    期望工作
                </div>
                <div class="user-resume">
                    <p><span class="user-resume-title">期望职位：</span><span>{{item.positionDesired}}</span></p>
                    <p><span class="user-resume-title">工作性质：</span><span>{{(item.jobNature==1)?'全职':'兼职'}}</span></p>
                    <p><span class="user-resume-title">期望月薪：</span><span>{{item.salary}}</span></p>
                    <p><span class="user-resume-title">期望城市：</span><span>{{item.wishCity}}</span></p>
                </div>
            </div>
            <div class="resume-content">
                <div class="content-title">
                    <i></i>
                    技能评价
                </div>
                <div class="user-resume">
                    <p><span>暂无技能评价</span></p>
                </div>
            </div>

            <div class="footer">我目前已离职,可快速到岗</div>
        </div>
    </div>
</template>

<script>

import Navbar from '../components/Navbar.vue';
import { mapGetters } from 'vuex';

export default {
    name:'resume',
    components:{
        Navbar,
    },
    computed:{
        ...mapGetters(['setResume'])
    },
    methods:{
        workExper(obj){  //工作经验
            if(!obj){
                return null;
            }

            switch(obj.workExper){
                case 0:
                    return '应届毕业生';
                    break;
                case 1:
                    return '一年以下';
                    break;
                case 2:
                    return '1-3年';
                    break;
                case 3:
                    return '3-5年';
                    break;
                case 4:
                    return '5-10年';
                    break;
                case 5:
                    return '10年以上';
                    break;
            }
        },
       education(obj){  //学历
             if(!obj){
                return null;
            }

            switch(obj.education){
                case 0:
                    return '大专以下';
                    break;
                case 1:
                    return '大专';
                    break;
                case 2:
                    return '本科';
                    break;
                case 3:
                    return '硕士';
                    break;
                case 4:
                    return '博士及博士以上';
                    break;
            }
        },
    },
    mounted(){
        this.$store._actions.getResume[0]()
    }
}
// https://www.lagou.com/images/myresume/boy.png
</script>

<style lang="less" scoped>
.resume{
    position: absolute;
    z-index: 999;
    width: 100%;
    // height: 100%;
    background-color: #fff;
}
.resume_title{
    // height: 78px;
    background: #ffffff url(https://www.lagou.com/images/myresume/resume_head.png) left top no-repeat;
    background-size: 100% 78px;
    background-size: 100%;
    overflow: hidden;
    div{
        width: 75px;
        height: 75px;
        border-radius: 50%;
        margin: 0 auto;
        margin-top: 60px;
        background-color: #fff;
        img{
            width: 65px;
            height: 65px;
            border-radius: 50%;
            margin: 5px;
        }
    }
}
.user-name{
    text-align: center;
    margin-top: 15px;
    font-size: 1.5rem;
    color: #333333;
    .man{
        display: inline-block;
        width: 11px;
        height: 16px;
        background: url(https://www.lagou.com/images/myresume/boy.png) center center no-repeat;
        background-size: 100%;
        margin-left: 15px;
    }
    .wman{
        display: inline-block;
        width: 11px;
        height: 16px;
        background: url(https://www.lagou.com/images/myresume/boy.png) center center no-repeat;
        background-size: 100%;
        margin-left: 10px;
        transform: rotate(180deg);
    }
}
.user-txt{
    line-height: 40px;
}
.resume-content{
    .content-title{
        margin: 0;
        font-weight: normal;
        border-top: 1px solid #dbdbdb;
        background-color: #eeeeee; 
        display: flex;
        align-items: center;
        font-size: 1.21rem;
        padding: 10px 0;
        i{
            width: 7px;
            height: 16px;
            background: #019875;
            margin: 3px 7px 0 15px;
        }
    }
    .user-resume{
        padding: 20px 30px;
        line-height: 1.5em;
        font-size: 1.05rem;
        P{
            display: flex;
            .user-resume-title{
                color:#888;
                margin-right:5px;
            }
        }
    }
}
.footer {
    background-color: #eeeeee;
    color: #333333;
    font-size: 1.1em;
    line-height: 60px;
    text-align: center;
    margin-bottom: 20px;
}
</style>
