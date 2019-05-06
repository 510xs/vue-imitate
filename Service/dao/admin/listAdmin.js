/**
 *  @管理员列表
 */

const listInfo = require("../../daoImpl/listInfo");

let listAdmin = function(req,res){

    //sql语句对象
    let sql = `select * from admin`;

    //获取数据列表
    listInfo(sql,(data)=>{
        res.send(data);
    })
}

module.exports = listAdmin;