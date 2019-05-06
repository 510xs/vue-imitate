<template>
  <div class="about">
    <div class="title">拉勾网</div>
    <div class="logininfo" v-show="setIsLogin?false:true">
      <router-link to="/loginCompent" class="nav_txt">
       <div>
         <span>登录</span>
         <span>/</span>
         <span>注册</span>
       </div>
      </router-link>
    </div>
    <div class="islogin" v-show="setIsLogin?true:false">
      <router-link
      to='/about/resume'
      class="resume_link">简历></router-link>
      <div class="userInfo">
            <img :src="setUserInfo?setUserInfo[0].userImg:null" alt="" />
      </div>
      <p class="show-user-name">{{setUserInfo?setUserInfo[0].userName:null}}</p>
    </div>
    <!-- 用户操作 -->
    <div class="user_content">
        <div>
          <router-link to='/deliver' class="user_color">投递</router-link>
        </div>
        <div>
          <router-link to='/interview' class="user_color">面试</router-link>
        </div>
        <div>
          <router-link to='/invite' class="user_color">邀约</router-link>
        </div>
        <div>
          <router-link to='/collect' class="user_color">收藏</router-link>
        </div>
    </div>
    <div
    class="loginOut"
    @click="loginOut"
    v-show="setIsLogin?true:false">
      退出登录
    </div>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

export default {
  name:'baout',
  computed:{
    ...mapGetters(['setIsLogin','setUserInfo'])
  },
  methods:{
    ...mapMutations({
      loginOut:'LOGIN_OUT'
    })
    
  }
}
</script>

<style lang="less">
    .logininfo{
      margin: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 111px;
      div{
        font-size: 0.92rem;
        color: #fff;
        width: 125px;
        line-height: 45px;
        text-align: center;
        margin: 0 auto;
        background-color: #1fc8a1;
        display: flex;
        justify-content: center;
        span{
          margin: 0 2px;
        }
      }
    }
    
    .user_content{
      margin: 15px 15px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      div{
        width: 48%;
        line-height: 86px;
        background-color: #1fc8a1;
        text-align: center;
        color: #fff;
        margin: 5px 0;
      }
    }
    .user_color{
      color:#fff;
    }
    .islogin{
      margin: 15px;
      margin-top: 25px;
      height: 111px;
      position: relative;
      .resume_link{
        position: absolute;
        top:0;
        right:0;
        color: #00b38a;
      }
      .userInfo{
        width: 70px;
        height: 70px;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .show-user-name{
        margin-top: 10px;
      }
    }

    .loginOut{
      margin: -10px 15px 0 15px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #1fc8a1;
      color: #fff;
      font-size: 1.2rem;
    }
</style>



