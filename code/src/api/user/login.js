import request from '../../utils/request';

//用户登录
export function login(obj){
    return request({
        url:'http://localhost:3000/login',
        method:"post",
        data:{
            userName:obj.userName,
            userPassWord:obj.userPassWord
        }
    })
}