import { Injectable } from "@angular/core";
import { Http,Headers,RequestOptions } from "@angular/http"
import "rxjs/add/operator/map";


@Injectable()
export class AppService{
  //设置响应头
  public headers = new Headers({"Content-Type":"application/json","charset":"UTF-8"});
  //配置参数
  public options = new RequestOptions({headers:this.headers});
  //构造函数
  constructor(private _http:Http){}
  //获取所有的cats
  getCats(){
    return this._http.get("/cats").map(res => {
      return res.json();
    })
  }
  //添加cat
  addCat(cat){
    return this._http.post("/add",JSON.stringify(cat),this.options)
  }
  //根据ID更新Cats
  editCat(cat){
    return this._http.put(`/cat/${cat._id}`,JSON.stringify(cat),this.options);
  }
  //删除
  deleteCat(cat){
    return this._http.delete(`/cat/${cat._id}`,this.options);
  }
}
