import Vue from 'vue';
import Vuex from 'vuex';
import {USER_INFO, ISLOGIN,COMPANY_LIST,CHANGE_ISSHOW, POSITION_DETAIL,SEARCH_LIST,CITY,LOGIN_OUT,RESUME,EDIT_POSITION_TYPE,
EDIT_POSITION_CITY, EDIT_POSITION_SALARY, EDIT_POSITION_COMPANY } from './mutation-type';
import { companyList } from '../api/company/companyList';
import { login } from '../api/user/login';
import { search } from '../api/company/search';
import { resume } from '../api/user/resume';
import { Toast } from 'vant';
import router from '../router';

Vue.use(Vuex)

var store = new Vuex.Store({
  state:{  //仓库存放数据的地方
    isLogin:false,      //用户是否登录
    userInfo:null,      //用户信息
    list:null,          //Home页的数据
    isShow:true,        //是否显示详情组件
    detailObj:null,     //详情数据条件
    searchList:null,    //搜索职位信息
    nowCity:'北京',     //当前搜索职位的城市
    resumeInfo:null,    //用户简历
    position:{          //用户编辑的职位
      name:null,
      city:'',
      salary:'没有要求',
      companyType:'没有要求'
    }
  },
  getters:{
    setList:function(state){                      //获取职位列表信息
      return state.list
    },
    setIsShow:(state)=>{
      return state.isShow;
    },
    setPositionDetail:(state)=>{                  //获取职位详情
      return state.detailObj;
    },
    setIsLogin:(state)=>{                         //获取用户登录状态
      return state.isLogin;
    },
    setUserInfo:(state)=>{                        //获取用户信息
      return state.userInfo;
    },
    setSearch:(state)=>{                          //获取搜索职位列表
      return state.searchList;
    },
    setCity:(state)=>{                            //获取当前搜索城市
      return state.nowCity;
    },
    setResume:(state)=>{
      return state.resumeInfo;                    //用户简历
    },
    setEditPosition:(state)=>{
      return state.position;
    }
  },
  mutations:{ //更改状态的地方
    [USER_INFO]:(state,info)=>{                   //存储用户登录后的信息
        state.userInfo = info.data;
        // console.log(state.userInfo[0])
    },
    [ISLOGIN]:(state,nowIs)=>{                    //判断用户是否登录
      state.isLogin = nowIs;
    },
    [COMPANY_LIST]:function(state,listData){      //获取职位列表
      state.list = listData;
    },
    [CHANGE_ISSHOW]:(state,nowIsShow)=>{          //改变是否显示详情页
      state.isShow = nowIsShow[0];
      state.detailObj = nowIsShow[1]
    },
    [POSITION_DETAIL]:(state,nowData)=>{          //发起获取职位详情的条件数据
      state.detailObj = nowData;
    },
    [SEARCH_LIST]:(state,list)=>{
      state.searchList = list;
    },
    [CITY]:(state,city)=>{
      state.nowCity = city.name;
    },
    [LOGIN_OUT]:(state)=>{
      state.userInfo = null;
      state.isLogin = false;
    },
    [RESUME]:(state,info)=>{
      state.resumeInfo = info;
    },
    [EDIT_POSITION_TYPE]:(state,info)=>{          //编辑职位名称
      state.position.name = info;
      router.replace('/edit');
    },
    [EDIT_POSITION_CITY]:(state,info)=>{
      state.position.city = info;
    },
    [EDIT_POSITION_SALARY]:(state,info)=>{
      state.position.salary = info;
      router.replace('/edit');
    },
    [EDIT_POSITION_COMPANY]:(state,info)=>{
      state.position.companyType = info.type;
      router.replace('/edit');
    }
  },
  actions:{ //做异步操作，提交mutation，发起后台请求
    showCompanyList:({commit})=>{
      companyList().then((res)=>{
        commit('COMPANY_LIST',res.data.data)
      })
    },
    getUserInfo:({commit},info)=>{
      if(!info.name){  //用户名判断
        Toast('用户名不能为空');
        return;
      }

      if(!info.password){
        Toast("密码输入错误");
        return;
      }
      
      let obj = {
          userName:info.name,
          userPassWord:info.password
      }

      login(obj).then((res)=>{    //用户登录请求
        if(res.data.code == 0){
          commit('USER_INFO',res.data);
          commit('ISLOGIN',true)
          router.replace('/');
        }
      })

    },
    getSearchList:({commit},info)=>{  //搜索职位
      console.log(info,'搜索条件')
      if(!info.setCity){
        Toast('抱歉，城市不能为空');
        return;
      }
      if(!info.params){
        Toast('抱歉，职位或公司不能为空');
        return;
      }

      search(info).then((res)=>{
        if(res.data.code == 2){
          Toast('报！该地区攻城师已阵亡，请换个地区搜索')
          return;
        }
        if(res.data.code == 1){
          Toast('报！攻城师正在战斗中，请稍后再搜索该职位');
          return;
        }
        if(res.data.code == 0){
          commit('SEARCH_LIST',res.data.data)
        }
      })
    },
    getResume:({commit,state})=>{     //用户简历
      if(!state.userInfo){
        return;
      }
      let obj ={
        userID:state.userInfo[0].userID,
        userName:state.userInfo[0].userName
      }

      resume(obj).then((res)=>{
        if(res.data.code == 1){
          Toast('报！您的攻城师已阵亡');
          return;
        }
        if(res.data.code == 2){
          Toast('哦噢，请重新操作');
          return;
        }
        commit('RESUME',res.data.data)
      })
    }
  }
})

export default store
