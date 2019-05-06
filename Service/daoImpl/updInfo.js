/**
 *  @修改数据
 */

const DbUtile = require("../dbUtile/dbUtile");

function updInfo(sql,callback){
    let conn = new DbUtile().getConn();
    conn.query(sql,(err,res)=>{
        let num = 0; //正常
        if(err){
            num = 1;
        }
        //返回数据为空
        if(res.length <= 0){
            num = 2;
        }
        let obj = {
            code:num,
            data:[],
            msg:(num == 0)?"修改数据成功":"未知错误，请刷新页面"
        }

        callback(obj);
    })
}

module.exports = updInfo;