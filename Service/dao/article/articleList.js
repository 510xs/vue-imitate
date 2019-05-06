/**
 *      @所有文章
 */

const listInfo = require("../../daoImpl/listInfo");

let articleList = function(req,res){
    //sql语句对象
    let sql = `select * from article`;
    //执行操作
    listInfo(sql,(data)=>{
        res.send(data);
    })
}

module.exports = articleList;