<template>
  <div class="all">
    <!-- 职位列表 -->
    <div class="home" v-show="setIsShow">
      <div class="title">拉勾网</div>
      <div class='title_code' v-show="setIsLogin?false:true">
        <span class="title_left_txt">10秒钟定制职位</span>
        <div class="show_txt">
          <div>
            <router-link to="/loginCompent" style="color: #00b38a;">去登录</router-link>
          </div>
        </div>
      </div>

      <div class='title_code' v-show="setIsLogin?true:false">
        <span class="title_left_txt">{{setEditPosition.name?(setEditPosition.name+'/'+setCity+'/'+setEditPosition.salary+'/'+setEditPosition.companyType):'10秒钟定制职位'}}</span>
        <div class="show_txt">
          <span>
            <router-link to="/Edit" style="color: #00b38a;">编辑</router-link>
          </span>
        </div>
      </div>
      <!-- <ul>
        <li v-for="item in setList" :key="item.companyID">{{item.time}}</li>
      </ul> -->
      <CompanyList 
          msg='test ok' 
          :leep='setList'
          :isShow='setIsShow' />
      <div class='load_more' @click="reqPosition">
        加载更多
      </div>
      <div id="copyright">
        <p>©2015 lagou.com, all right reserved </p>
        <div class="copyright-item">
          <span class="phone active">移动版&nbsp;·&nbsp;</span>
          <span class="computer">电脑版&nbsp;·&nbsp;</span>
          <a href="#header">回顶部</a>
        </div>
      </div>
    </div>
    <!-- 职位详情 -->
    <div class="position_detail" v-show="setIsShow?false:true" >
     <Position :detail='setPositionDetail' />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

//职位列表模板
import CompanyList from '@/components/CompanyList.vue';
import Position from '../components/Position.vue';
// 辅助函数
import { mapActions ,mapGetters} from 'vuex';
import { Row, Col} from 'vant';

export default {
  name: 'home',
  data(){
    return ({
      isShow:true
    })
  },
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    CompanyList,
    Position
  },computed:{
    ...mapGetters(['setList','setIsShow','setPositionDetail','setIsLogin','setEditPosition','setCity']),
  },
  methods:{
    ...mapActions({
      companylist:'showCompanyList'
    }),
    reqPosition:function(){
      console.log(this.$store.state.isLogin)
    },
    changeIsShow:function(){
      console.log("test")
    }
  },

  mounted(){
    // companylist();
    console.log('ok')
    this.$store._actions.showCompanyList[0]();
  }
}
</script>

<style lang='less'>
.title{
  line-height: 45px;
  background-color: #00b38a;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
}
.title_code{
  border-bottom: 1px solid #e8e8e8;
    height: 43px;
    line-height: 43px;
    padding: 0 15px;
    color: #555;
    position: relative;
    .title_left_txt{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      margin-right: 100px;
      height: 100%;
      text-align: left;
    }
    .show_txt{
      position: absolute;
      right: 20px;
      top: 0;
      display: block;
      float: right;
      background-color: #f5f5f5;
      padding: 0 20px;
      line-height: 30px;
      margin-top: 6px;
      color: #00b38a;
      border-radius: 15px;
    }
}
.load_more{
      line-height: 50px;
      text-align: center;
      font-size: 1.05rem;
      background-color: #fafafa;
}
.load_more:active{
      background-color: #F0F0F0;
}

//页脚
#copyright {
    text-align: center;
    font-size: 1rem;
    margin-top: 30px;
    padding-bottom: 40px;
    color: #333333;
    p{
      font-size: 0.7rem;
    }
    .copyright-item {
      line-height: 32px;
      font-size: 0.9rem;
      a{
        color: #333;
      }
      .active{
        color:999;
      }
    }
}
</style>

