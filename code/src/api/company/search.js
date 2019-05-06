/**
 *  @搜索职位
 */

 import request from '../../utils/request';
 import faceUrl from '../faceUrl';

 export function search(obj){
     return request({
         url:faceUrl.url+faceUrl.companySearch,
         method:'post',
         data:{
             city:obj.setCity,
             params:obj.params
         }
     })
 }