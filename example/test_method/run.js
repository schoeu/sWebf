/**
 * Created by IAOC on 2014/12/3.
 */
var fk = require("../.."),
    App = fk.APP,
    app = new App(),
    static_middle = fk.static;

//加载static中间件
app.use(static_middle(__dirname+"/public"));

app.get(function(req,res){
    res.write("get result");
    res.end();
});

app.post(function(req,res){
    res.write("post result");
    res.end();
});

app.listen(3000);