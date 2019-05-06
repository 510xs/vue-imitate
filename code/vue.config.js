module.exports = { //修改webpack原来的配置
    devServer:{
        proxy:{
            '/user':{ //  /开头的接口，全部代理下面的接口
                target:"http://localhost:3000",
                changeOrigin:true
            }
        }
    }
}