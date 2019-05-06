/**
 *  @职位列表
 */

import request from '../../utils/request';
import faceUrl from '../faceUrl';

export function companyList(){
    return request({
        url:faceUrl.url+faceUrl.companyList,
        method:'post',
    })
}