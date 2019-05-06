/**
 *      @登录操作
 */

const DbUtile = require("../dbUtile/dbUtile");

function login(sql,callback){
    let conn = new DbUtile().getConn();
    conn.query(sql,(err,res)=>{
        let num = 0; //返回状态
        if(err){
            num = 1;
        }
        if(res.length <= 0){
            num = 2;
        }
        let obj = {
            code:num,
            data:res?res:[],
            msg:(num == 0)?"登录成功":(num == 2)?"此用户不存在，请注册":"未知错误",
        };

        callback(obj);
    })
}

module.exports = login;