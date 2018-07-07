import { Component,ViewChild,ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConfigProvider } from '../../providers/config/config';

import { HttpServicesProvider } from '../../providers/http-services/http-services';

import { StorageProvider } from '../../providers/storage/storage';
//购物车页面
import { CartPage } from '../cart/cart';

/**
 * Generated class for the PcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pcontent',
  templateUrl: 'pcontent.html',
})
export class PcontentPage {



  @ViewChild('myattr') myattr:ElementRef;

  public CartPage=CartPage;

  public tabs='plist';  /*商品列表选中*/

  public item=[];  /*商品列表*/
  public num=1;  /*商品数量*/

  public carts_num=0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public config:ConfigProvider,public httpService:HttpServicesProvider,public storage:StorageProvider) {

   
    // console.log(this.navParams.data.id);
    this.requestData(this.navParams.data.id);


    //计算购物车的数量
    this.carts_num=this.getCartsNum();
  }
  
  ionViewDidLoad() {

    this.bindEvent();
    
  }
  requestData(id){
    //http://39.108.159.135/api/pcontent?id=59f6a2d27ac40b223cfdcf81
    var api='api/pcontent?id='+id
    this.httpService.requestData(api,(data)=>{
      console.log(data);

      this.item=data.result;
    })
  }

  //绑定事件的方法
  bindEvent(){
      // console.log(this.myattr.nativeElement);

      var attrDom=this.myattr.nativeElement;

      attrDom.onclick=function(e){
          // console.log(e.srcElement.nodeName);  //元素名称
          // console.log(e.target);  //DOM节点

          if(e.srcElement.nodeName=='SPAN'){

              var ele:any=e.target;   /*获取点击的元素       注意*/

              var parentNode=ele.parentNode;  /*获取当前元素的父节点*/

              var children=parentNode.children;   /*获取父节点下面的所有子节点  去掉空白节点*/

              for(var i=0;i<children.length;i++){
                children[i].className='';
              }
              ele.className='active';

          }

      }
  }

  //加入购物车

  addCart(){

    //获取商品数据

    var product_title=this.item['title'];

    var product_id=this.item['_id'];

    var product_pic=this.item['pic'];

    var product_price=this.item['price'];

    var product_count=this.num;  /*商品数量*/


    //商品的属性
    var product_attr='';

    //es5 获取dom节点的方式
    var activeDom=document.querySelectorAll('#myattr .active');

    // console.log(activeDom);
    for(var i=0;i<activeDom.length;i++){
      product_attr+=activeDom[i].innerHTML;
    }

    var json={
      'product_title':product_title,
      'product_id':product_id,
      product_pic,  /*es6 属性的简写*/
      product_price,
      product_count,
      product_attr,
      checked:true  /*默认加入购物车 数据选中*/     
    }
    // console.log(json);

    //加入购物车保存到localstorage   如果存在 当前数量+1  如果不存在写入

    var storageData=this.storage.get('carts_data');

    if(storageData){  /*有数据*/

      //判断购物车里面有没有当前这条数据  
      if(this.hasData(storageData,json.product_id)){  /*购物车有数据*/

          //修改刚才购物车里面的数量
          
          for(var i=0;i<storageData.length;i++){
            
            if(storageData[i].product_id==product_id){
               storageData[i].product_count+=json.product_count;  /*以前的数量加上选择的数量*/
            }
          }
          

      }else{  /*购物车没有数据*/
        storageData.push(json);
      }
      //重新写入
      this.storage.set('carts_data',storageData);


    }else{  /*没有数据  第一次加入购物车*/

        var tempArr=[];

        tempArr.push(json);
        this.storage.set('carts_data',tempArr);

    }

    this.carts_num+=json.product_count;   /*点击加入购物车改变 购物车数量*/

  }

    //增加数量

   incNum(){
      
    this.num+=1;
          
   }

   //减少数量

  decNum(){
      
    

      if(this.num>1){

        this.num-=1;
      }

   }

   //判断购物车有没有数据
   hasData(storageData,product_id){

      if(storageData){

          for(var i=0;i<storageData.length;i++){

            if(storageData[i].product_id==product_id){
              return true;  /*有数据*/
            }
          }
      }

      return false;

   }

   //获取购物车数量
   getCartsNum(){
      var num=0;
      var storageData=this.storage.get('carts_data');

      if(storageData){
          for(var i=0;i<storageData.length;i++){
            
            num+=storageData[i].product_count;
          }

      }
      return num;


   }


}
