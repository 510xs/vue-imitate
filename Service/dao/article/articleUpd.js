/**
 *  @修改文章
 */

const updInfo = require("../../daoImpl/updInfo");

let articleUpd = function(req,res){

    let time = new Date().toLocaleDateString();

    //sq语句对象
    let sql = `update article set articleTitle='${req.body.articleTitle}',articleAnthor='${req.body.articleAnthor},articleContent='${req.bdoy.articleContent}',time='${time}',articleType='${req.body.articleType}',articleImg='${req.body.articleImg}'`;
    //执行语句
    updInfo(sql,(data)=>{
        res.send(data);
    })
}

module.exports = articleUpd;