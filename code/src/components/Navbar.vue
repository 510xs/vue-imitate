<template>
    <div>
        <!-- 导航栏 -->
        <van-nav-bar
        :title='title'
        left-arrow
        @click-left="onClickLeft"
        class="nav_bar"
        />
    </div>
</template>

<script>

import { NavBar } from 'vant';

export default {
    name:'navbar',
    props:{
        title:String,
    },
    components:{
        [NavBar.name]:NavBar,
    },
     methods: {
    onClickLeft() {
       this.$router.back();
    }
  }
}
</script>

<style lang="less" scoped>
    .nav_bar{
        background-color: #00b38a;
        height: 45px;
    }
    .van-nav-bar__title{
        background-color: #00b38a;
        color: #fff;
        font-size: 1.2rem;
        line-height: 45px;
    }
    .van-nav-bar .van-icon{
        color: #fff;
        font-size: 1.4rem;
    }

.van-nav-bar{
    height: none;
}
    
</style>


