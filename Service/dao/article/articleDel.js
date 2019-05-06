/**
 *  @删除文章
 */

const delInfo = require("../../daoImpl/delInfo");

let articleDel = function(req,res){
    //sql语句对象
    let sql = `delete from article where articleID='${req.body.articleID}' and articleTitle='${req.body.articleTitle}'`;
    //支持操作
    delInfo(sql,(data)=>{
        res.send(data);
    })
}

module.exports = articleDel;