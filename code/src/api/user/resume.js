/**
 * @用户简历
 */

 import request from '../../utils/request';
 import faceUrl from '../faceUrl';

 export function resume(obj){
    return request({
        url:faceUrl.url+faceUrl.userDetail,
        method:'post',
        data:{
            userID:obj.userID,
            userName:obj.userName
        }
    })
 }