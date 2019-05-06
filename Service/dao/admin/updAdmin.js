/**
 *  @修改数据
 */

const updInfo = require("../../daoImpl/updInfo");

let updAdmin = function(req,res){
    //sql语句
    let sql = `update admin set adminName=${req.body.adminName} where adminID='${req.body.adminID}'`;
    //执行修改操作
    updInfo(sql,(data)=>{
        res.send(data);
    })
}

module.exports = updAdmin;