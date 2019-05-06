/**
 *   @管理员详情
 * */

const detailInfo = require("../../daoImpl/detailInfo");

let detailAdmin = function(req,res){
    //sql语句
    let sql = `select * from admin where adminID='${req.body.adminID}'`;
    //执行操作
    detailInfo(sql,(data)=>{
        res.send(data);
    })
}

module.exports = detailAdmin;