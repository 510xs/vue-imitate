/**
 *      @添加文档
 */

const saveInfo = require("../../daoImpl/saveInfo");

let articleSave = function(req,res){
    //sql语句对象
    let sql = `insert into article (articleTitle,articleAnthor,articleContent,time,articleType,articleImg) values(?,?,?,?,?,?)`;
    //执行操作
    saveInfo(sql,(data)=>{
        res.send(data)
    })
}

module.exports = articleSave;