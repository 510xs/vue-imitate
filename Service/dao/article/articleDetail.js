/**
 *  @文章详情
 */

const detailInfo = require("../../daoImpl/detailInfo");

let articleDetail = function(req,res){
    //sql语句对象
    let sql = `select * from article where articleID='${req.body.articleID}'`;
    //执行操作
    detailInfo(sql,(data)=>{
        res.send(data);
    })
}

module.exports = articleDetail;