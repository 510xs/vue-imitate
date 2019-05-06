/**
 *  @数据详情
 */

const DbUtile = require("../dbUtile/dbUtile");

function detailInfo(sql,callback){
    let conn = new DbUtile().getConn();
    conn.query(sql,(err,res)=>{
        let num = 0; //定义操作状态
        if(err){
            num = 1;
        }
        //操作的数据为空
        if(res.length <=0){
            num = 2;
        }

        //定义数据返回对象
        let obj = {
            code:num,
            data:(num == 0)?res:[],
            msg:(num == 9)?"已获取对象详情":"获取详情失败，请确认请求是否正确",
        }

        //执行回调函数
        callback(obj);
    });
}

module.exports = detailInfo;