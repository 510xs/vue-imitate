/**
 *  @添加数据
 */
const DbUtile = require("../dbUtile/dbUtile");

function saveInfo(sql,callback){
    console.log(sql,"yuju")
    let conn = new DbUtile().getConn();
    conn.query(sql,(err,res)=>{
        if(err) throw err;
        let num = 0; //返回正常
        if(err){
            num = 1;
        }
        //返回对象
        let obj = {
            code:num,
            data:[],
            msg:""
        }
        callback(obj);
    })
}

module.exports = saveInfo;