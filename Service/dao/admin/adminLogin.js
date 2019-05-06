/**
 *   @管理员登录
 */

const login = require("../../daoImpl/login");

let adminLogin = function(req,res){
    console.log(req.body,"请求对象")
    //登录sql语句对象
    let sql = `select adminID,adminName,adminSex,adminAge,adminType,adminImg,adminOnline from admin where adminName='${req.body.adminName}' and adminPassWord='${req.body.adminPassWord}'`;
    // let sql =  `select * from admin`
    //执行登录操作
    login(sql,(data)=>{
        console.log(data)
        res.send(data);
    });
}

module.exports = adminLogin;