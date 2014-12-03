/**
 * Created by IAOC on 2014/12/1.
 */
//是静态资源服务的中间件，其实之前的代码主要是加入这个文件中，作为一个插件形式存在。
var url = require("url"),fs = require("fs");
//把URL转换成资源路径
function url2path(str){
    var urlObj = url.parse(str);
    var path = urlObj.path;
    return path;
}

module.exports = function(parent_path){
    //暂时无需调用next
    return function(req,res,next){
        var path = url2path(req.url);
        function callback(err,data){
            if(err){
                //res.statusCode = 404;
                //如果找不到资源直接next();
                next();
            }else{
                res.write(data);
                res.end();
            }
        }
        fs.readFile(parent_path+path,callback);
    }
};