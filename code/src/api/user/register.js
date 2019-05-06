import request from '../../utils/request';

//用户注册
export function register(obj){
    return request({
        url:'http://localhost:3000/register',
        method:'post',
        data:{
            userNmae:obj.userName,
            userPassWord:obj.userPassWord
        }
    })
}