/**
 *   @增加管理员
 */
const saveInfo = require("../../daoImpl/saveInfo");

let saveAdmin = function(req,res){
    //sql语句对象
    let sql = `insert into admin (adminName,adminPassWord) values ('${req.body.userName}','${req.body.userPassWord}')`;
    //执行插入操作
    saveInfo(sql,(data)=>{
        res.send(data);
    })
}

module.exports = saveAdmin;