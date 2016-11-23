import { Component,OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';  //form表单相关组件
import { AppService } from "../seriver/app.seriver";
import { ToastComponent } from "../shared/toast.component";


@Component({
  selector:"home-app",
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})

export class HomeComponent implements OnInit{
  private cats = [];
  private isEditing = false;
  private isLoading = true;
  private cat = {};
  private addCatForm:FormGroup;        //form组
  private name = new FormControl("",Validators.required);  //form控制器
  private age = new FormControl("",Validators.required);
  private weight = new FormControl("",Validators.required);
  //构造器
  constructor(private dataSeriver:AppService,private formBuilder:FormBuilder,private toast:ToastComponent){}
  //获取所有cat
  getCats(){
    this.dataSeriver.getCats().subscribe(     //http请求返回的是一个(subscribe)观察者对象
      data => {                                //
        this.cats = data;
      },
      error => console.log(error),
      () => this.isLoading = false
    )
  }
  //添加cat
  addCat(){
    this.dataSeriver.addCat(this.addCatForm.value).subscribe(
      res => {
        var newCat = res.json();            //res.是后台发送接送数据过来请求成功
        this.cats.push(newCat);
        this.addCatForm.reset();           //重置表单
        this.toast.setMessage("添加成功","success");
      },
      error => console.log(error)
    )
  }
  //编辑
  enableEditing(cat){
    this.isEditing = true;
    this.cat = cat;
  }
  //保存编辑
  editCat(cat){
    this.dataSeriver.editCat(cat).subscribe(
        res => {
        this.isEditing =false;
        this.cat = cat;
        this.toast.setMessage("更新成功","success");
      },
        error => console.log(error)
    );

  }

  //清除编辑
  cancelEditing(){
    this.isEditing = false;
    this.cat = {};
    this.toast.setMessage("取消编辑","warning");
    this.getCats();
  }

  //删除cat
  deleteCat(cat){
    if(window.confirm("您确定要删除吗")){
      this.dataSeriver.deleteCat(cat).subscribe(
          res => {
            this.cats = this.cats.filter(item => item != cat);
            this.toast.setMessage("删除成功","success");
          },
          error => console.log(error)
      )
    }
  }

  //生命周期钩子
  ngOnInit(){
    this.getCats();
    //form对象
    this.addCatForm = this.formBuilder.group({
      name:this.name,
      age:this.age,
      weight:this.weight
    })
  }
}
