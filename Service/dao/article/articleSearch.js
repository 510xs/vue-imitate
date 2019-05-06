/**
 *      @搜索文章
 */

const searchInfo = require("../../daoImpl/searchInfo");

let articleSearch = function(req,res){
    //sql语句对象
    let sql = `select * from article where articleID like '%${req.body.articleID}%' or articleTitle like '%${req.body.articleTitle}%'`;
    //执行操作
    searchInfo(sql,(data)=>{
        res.send(data);
    })
}

module.exports = articleSearch;