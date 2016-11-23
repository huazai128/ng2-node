var express = require("express");
var path = require("path");
var logger = require("morgan");              //logger
var bodyParser = require("body-parser");   //post请求处理参数
var cookie = require("cookie-parser");     //cookie缓存
var session = require("express-session");  //session回话
var mongoose = require("mongoose");         //mongodb数据库
mongoose.Promise = require("bluebird");     //Promise对象

//链接数据库
var db = mongoose.connect("mongodb://localhost:27017/stack");

require("./models/cat.js");

var app = express();

app.set("port",process.env.PORT || 8080);      //端口好的设置
app.use('/', express.static(__dirname + '/../../dist')); //设置静态文件
app.use('/', express.static(__dirname + '/../assets'));  //设置静态文件

//中间件的配置
app.use(logger("dev"));
app.use(bodyParser.json());                    //只接受json数据
app.use(bodyParser.urlencoded({extended: true}));  //extended
app.use(cookie("JDSF-SVVS-WEWF"));           //对cookie进行加密
app.use(session({
  secret:"vsvbbrvrfbb",
  resave:false,
  cookie:{
    maxAge: 60 * 60 * 1000
  }
}));

require("./router/index")(app);

app.listen(app.get("port"),function(){
  console.log("我知道你在监听我 " + app.get("port"))
});

exports = module.exports = app;
