import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';             //form表单组件
import { HttpModule } from '@angular/http';               //http组件
import { RouterModule } from "@angular/router";           //路由组件
import appRouter from "./app.router";

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { AppService } from "./seriver/app.seriver";
import { ToastComponent } from "./shared/toast.component";

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ToastComponent,AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    appRouter,
    ReactiveFormsModule
  ],
  providers: [AppService,ToastComponent],                                   //提供服务的注入
  bootstrap: [AppComponent]
})
export class AppModule { }
