import axios from 'axios';

//封装请求
const service = axios.create({ //设置全局配置
    //baseURL:'http://scmiaojia.top', //请求根路径
    timeout:10000  //请求超时时间
});

//配置请求拦截，响应拦截
//请求拦截
axios.interceptors.request.use((confing)=>{
    return confing;
},(error)=>{
    return Promise.reject(error);
});

//响应拦截
axios.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    return Promise.reject(error);
});

export default service