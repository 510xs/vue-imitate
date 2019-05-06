/**
 *  @搜索数据
 */

const DbUtile = require("../dbUtile/dbUtile");

function searchInfo(sql,callback){
    let conn = new DbUtile().getConn();
    conn.query(sql,(err,res)=>{
        let num = 0; //正常
        if(err){ //未知错误
            num = 1;
        }
        // 数据为空
        if(res.length <=0){
            num = 2;
        }
        let obj ={
            code:num,
            data:res?res:[],
            msg:(num == 0)?"已获取数据列表":(num == 2)?"未搜索到对象，请重新搜索":"未知错误，请刷新页面",
        }
        callback(obj)
    });
}

module.exports = searchInfo;