import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConfigProvider } from '../../providers/config/config';

import { HttpServicesProvider } from '../../providers/http-services/http-services';


import {Http,Jsonp} from "@angular/http";


//搜索页面
import { SearchPage } from '../search/search';

//商品详情
import { PcontentPage } from '../pcontent/pcontent';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public PcontentPage=PcontentPage;
  public focusList=[];  /*数组 轮播图*/
  public focusListTest=[];  /*数组 轮播图*/
  public bestList=[];   /*精品推荐*/
  public bestListWidth=''; /*精品推荐数据长度*/
  public hotList=[];  /*热门商品 精品推荐*/




  

  constructor(public navCtrl: NavController,public config:ConfigProvider,public jsonp:Jsonp,public httpService:HttpServicesProvider) {


    // console.log(this.config.apiUrl);

    // this.config.run();

    //调用轮播图

    this.getFocus();

    //调用精品推荐
    this.getBestProduct();

    //调用猜你喜欢

    this.getHotProduct();


   
  }
  //定义一个跳转到搜索页面的方法
  goSearch(){

    this.navCtrl.push(SearchPage);
  }
  //轮播图
  getFocus(){ 
    var that=this;
    
    this.httpService.requestData('api/focus',function(data){
       console.log(data);
        that.focusList=data.result;
        that.focusListTest = data.result[0];
    })

  }

 //精品推荐

 getBestProduct(){

   // http://39.108.159.135/api/plist?is_best=1

    this.httpService.requestData('api/plist?is_best=1',(data)=>{
      console.log(data);
        this.bestList=data.result;
        this.bestListWidth=this.bestList.length*92+'px'; 
    })
 }
 //猜你喜欢

 getHotProduct(){
  
      //http://39.108.159.135/api/plist?is_hot=1  
      this.httpService.requestData('api/plist?is_hot=1',(data)=>{
        // console.log(data);
          this.hotList=data.result;            
        
      })
  
   }



}
