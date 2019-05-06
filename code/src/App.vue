<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> 
    </div> -->
    <router-view/>
    <van-row id=nav>
        <van-col span="8">
          <router-link to="/">
            <van-icon name="wap-home" size='20px'></van-icon>
            职位
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/search" class="nav_txt">
            <van-icon name='search' size='20px'></van-icon>
            搜索
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/about" class="nav_txt">
            <van-icon name='user-o' size='20px'></van-icon>
            我的
          </router-link>
        </van-col>
      </van-row>
  </div>
</template>

<script>
import { Row, Col, Icon } from 'vant';
import 'vant/lib/icon/local.css'

// Vue.use(Row).use(Col);
export default {
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Icon.name]: Icon,
  }
}
</script>



<style lang="less">
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position:fixed;
  width:100%;
  left: 0;
  bottom: 0;
  line-height: 45px;
  background-color:rgb(246,246,246);
  // color:#00b38a;
  .nav_txt{
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 45px;
    text-indent: 3px;
    width: 100%;
    height:100%;
  }
}

.change-nav-color{
  background-color:#e7f3f0;
  color:#00b38a;
}
</style>
