var Controller = require("../controllers/cat");
var path = require("path");

epxorts = module.exports = function(app){
  //获取所有cats
  app.get("/cats",Controller.getCats);
  //添加cat
  app.post("/add",Controller.addCat);
  //根据ID更新cat
  app.put("/cat/:id",Controller.updateCat);
  //获取总数
  app.get("/cats/count",Controller.getCount);
  //根据ID查询
  app.get("/cat/:id",Controller.getCat);
  //根据ID删除Cat
  app.delete("/cat/:id",Controller.deleteCat);



  app.get("/*",function(req,res){
    res.sendFile(path.join(__dirname,'/../../dist/index.html'));
  });
};
