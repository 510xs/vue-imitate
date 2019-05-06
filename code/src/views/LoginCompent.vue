<template>
    <div>
        <div class="login_content" v-show="isRegister?true:false">
            <div class="login_title">
                <h2>拉勾登录</h2>
                <p 
                class="register_btn"
                @click="goRegister(isRegister)"
                >注册</p>
            </div>
            <div class="login_box">
                <div class="input_label">
				    <input
                        type="text"
                        v-model="obj.name"
                        placeholder="请输入已验证的手机号或邮箱"
                        class="input_text user_input">
			    </div>
                <div class="input_label input_pwd">
				    <input
                        type="password"
                        v-model="obj.password"
                        placeholder="请输入密码"
                        class="input_text user_input">
			    </div>
                <div class="login" @click="userLogin(obj)">登录</div>
            </div>
            <p 
                class="tel_login"
                @click="goRegister(isRegister)"
                >手机号登录</p>
        </div>

        <!-- 注册 -->
        <div class="registerContent" v-show="isRegister?false:true">
            <div class="login_title">
                <h2>拉勾登录</h2>
                <p 
                class="register_btn"
                @click="goRegister(isRegister)"
                >登录</p>
            </div>
            <div class="register_box">
                <div class="input_label">
				    <input 
                        type="text"
                        v-model="regObj.userName"
                        placeholder="请输入用户名或常用手机号" 
                        class="input_text user_input">
			    </div>
                <div class="input_label">
				    <input 
                        type="password"
                        v-model="regObj.userPassWord"
                        placeholder="请输入密码"
                        class="input_text user_input">
			    </div>
                <div class="register" @click="register">注册</div>
                <div class="register_agreement">
                    <span>注册拉勾代表你已同意</span>
                    <a href="http://www.lagou.com/privacy.html" target="_blank">《拉勾用户协议》</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { register } from '../api/user/register';
import { mapActions, mapGetters } from 'vuex';
import { Toast } from 'vant';

export default {
    name:'loginCompent',
    data(){
        return ({
            isRegister:true,
            obj:{
                name:null,
                password:null
            },
            regObj:{
                userName:null,
                userPassWord:null,
            }
        })
    },
    computed:{
    },
    methods:{
        goRegister(isRegister){
            this.isRegister =isRegister?false:true;
        },
        register(){
            if(!this.regObj.userName){
                Toast('用户名不能为空');
                return;
            }
            if(!this.regObj.userPassWord){
                Toast('密码不能为空');
                return;
            }
            
            let reg = {
                userName:this.regObj.userName,
                userPassWord:this.regObj.userPassWord
            }

            register(reg).then((res)=>{
               if(res.data.code == 0){
                   this.isRegister = true;
                   this.regObj.userName = null;
                   this.regObj.userPassWord = null;
               }
            })
        },
        ...mapActions({
            userLogin:'getUserInfo'
        })
    }
}
</script>

<style lang="less" scoped>
html,body{
    width: 100%;
    height: 100%;
}
.login_content{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 111;
    background-color:#fff;
    
    .login_box{
        margin-top: 55px;
        .input_label{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 35px;
            border-bottom: 1px solid #E8E9EB;
            line-height: 55px;
            .input_text{
                width: 100%;
                font-size: 1.2rem;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                color: #333;
                border: 0;
                outline: 0;
                border-radius: 0;
            }
        }
        .input_pwd{
            margin-top: 10px;
        }
        .login{
            margin: 0 35px;
            margin-top: 50px;
            border-radius: 3px;
            background-color: #00b38a;
            color: #fff;
            line-height: 50px;
            text-align: center;
        }
    }
    .tel_login{
        position: absolute;
        bottom: 50px;
        left: 35px;
        color: #00b38a;
    }
}

.login_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 38px 35px;
    h2{
        color: #333;
        font-weight: 400;
    }
    .register_btn{
        color: #00b38a;
    }
    
}

// 注册
.registerContent{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 111;
    background-color:#fff;
    .register_box{
       margin-top: 55px;
       .input_label{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 35px;
            border-bottom: 1px solid #E8E9EB;
            line-height: 55px;
            .input_text{
                width: 100%;
                font-size: 1.2rem;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                color: #333;
                border: 0;
                outline: 0;
                border-radius: 0;
            }
        }
        .input_pwd{
            margin-top: 10px;
        }
        .register{
            margin: 0 35px;
            margin-top: 50px;
            border-radius: 3px;
            background-color: #00b38a;
            color: #fff;
            line-height: 50px;
            text-align: center;
        }
        .register_agreement {
            color: #999;
            margin: 0 35px;
            font-size: .9rem;
            margin-top: 20px;
            text-align: left;
        }
    }
}
</style>


