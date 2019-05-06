/**
 *  删除操作
 */
const DbUtile = require("../dbUtile/dbUtile");

function delInfo(sql,callback){
    let conn = new DbUtile().getConn();
    conn.query(sql,(err,res)=>{
        let num = 0; //正常
        if(err){    //未知错误
            num = 1;
        }

        //返回对象
        let obj = {
            code:num,
            data:[],
            msg:(num = 1)?"数据操作成功":"数据操作失败"
        }
    })
}

module.exports = delInfo;