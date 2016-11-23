var mongoose = require("mongoose");
    Cat = mongoose.model("Cat");


//获取所有cats列表
exports.getCats = function(req,res){
  Cat.find({},function(err,cats){
    if(err){
      return console.log(err)
    }
    res.json(cats);
  })
};

//获取所有cats数目；
exports.getCount = function(req,res){
  Cat.count({},function(err,count){
    if(err){
      return console.log(err);
    }
    res.json(count);
  })
};

//添加cat
exports.addCat = function(req,res){
  var cat = new Cat(req.body);
  cat.save({new: true},function(err,cat){
     if(err){
       return console.log(err);
     }
    res.json(cat)
  })
};

//根据ID删除
exports.deleteCat = function(req,res){
  var catId = req.params.id;             //params路由参数，query:解析url参数，body获取post提交参数
  Cat.findOneAndRemove({_id:catId},function(err,result){
    if(err) return console.log(err);
    console.log(result);
    res.sendStatus(200);                  //发送状态
  })
};

//根据ID更新;首先判断值是否改变
exports.updateCat = function(req,res){
  var catId = req.params.id;
  Cat.findOneAndUpdate({_id:catId},req.body,function(err,cat){
    if(err){
      return console.log(err)
    }
    res.sendStatus(200);
  })
};

//根据ID查询
exports.getCat = function(req,res){
  var catId = req.parmas.id;
  Cat.findOne({_id:catId},function(err,cat){
    if(err) return console.error(err);
    res.json(cat);
  })

}


