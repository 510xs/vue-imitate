<template>
  <div class="searchBox">
      <!-- 我是搜索页 -->
    <div v-show="setIsShow">
      <div class="title">拉勾网</div>
      <div class="content">
        <div class="lbutton">
            <router-link to="/chooseCity" style="color: #000">
               <span class="city">{{setCity}}</span>
            </router-link>
            <span class="cityicon">
              <van-icon name="arrow-down" size="12px" />
            </span>
        </div>
        <van-field v-model="params" class="input_search" placeholder="搜索公司或职位" />
        <div class="search_btn" @click="onSearch({params,setCity})">
          <van-icon name="search" color="#C3D0CD" size="25px" />
        </div>
      </div>
      <CompanyList 
          msg='test ok' 
          :leep='setSearch'
          :isShow='setIsShow' />
    </div>
    <!-- 职位详情 -->
    <div class="position_detail" v-show="setIsShow?false:true" >
     <Position :detail='setPositionDetail' />
    </div>
    <!-- <City /> -->
  </div>  
</template>

<script>

import { Icon, Field } from 'vant';
import { mapActions, mapGetters } from 'vuex';
import CompanyList from '@/components/CompanyList.vue';
import Position from '../components/Position.vue';
import City from '../components/City.vue';

export default {
  name:'search',
  components:{
    [Icon.name]:Icon,
    [Field.name]:Field,
    CompanyList,
    Position,
    // City,
  },
  data(){
    return ({
        params:null,
    })
  },
  computed:{
    ...mapGetters(['setSearch','setIsShow','setPositionDetail','setCity'])
  },
  methods:{
    ...mapActions({
        onSearch:'getSearchList'
    })
  }
}
</script>

<style lang="less" scoped>
.title{
  line-height: 45px;
  background-color: #00b38a;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
}
.content{
  line-height: 45px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  .lbutton {
      font-size: 1rem;
      text-align: center;
      width: 20%;
      border-right: 1px solid #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: center;
      .city{
        margin-right: 5px;
        max-width: 50px;
        white-space:nowrap;
        overflow:hidden; 
        text-overflow:ellipsis; 
      }
  }
  .input_search{
    width: 65%;
    font-size: 1rem;
  }
  .search_btn{
    width: 15%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.search_btn:active{
  background-color:#e8e8e8;
}
</style>


