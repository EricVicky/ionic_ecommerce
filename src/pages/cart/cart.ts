import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConfigProvider } from '../../providers/config/config';
import { StorageProvider } from '../../providers/storage/storage';
import { OrderPage } from '../order/order';


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  public list=[];

  public allPrice=0;  /*总价*/

  public isChencked=false;  /*全选反选*/

  public isEdit=false;   /*是否编辑*/

  public hasData=true;   /*是否有数据*/

  constructor(public navCtrl: NavController,public config:ConfigProvider,public storage:StorageProvider) {

  }
  ionViewDidEnter(){
     this.getCartsData();

     console.log(this.getChenckNum(),this.list.length);      
      //进来的时候判断有没有全选
      if(this.getChenckNum()==this.list.length && this.list.length>0){      
        this.isChencked=true;
      }else{
        this.isChencked=false;
      }      
  }

  getCartsData(){
    var cartsData=this.storage.get('carts_data');
    console.log(cartsData);
   if(cartsData && cartsData.length>0){
      this.list=cartsData;
      this.hasData=true;

    }else{
      this.list=[];
      this.hasData=false;
    }
    this.sumPrice(); 

  }
  changeCarts(){
    // console.log(this.list);
  

    if(this.getChenckNum()==this.list.length){

      this.isChencked=true;
    }else{
      this.isChencked=false;
    }

    this.sumPrice();  

  }
/*计算总价*/
  sumPrice(){


      var tempAllPrice=0;

      for(let i=0;i<this.list.length;i++){

        if(this.list[i].checked==true){

          tempAllPrice+=this.list[i].product_count*this.list[i].product_price;
        }

      }

      this.allPrice=tempAllPrice;

  }

  //数量变化  双向数据绑定

  decCount(item){
    // console.log(item);

    if(item.product_count>1){

      --item.product_count;
    }
    this.sumPrice();  

  }

  incCount(item){    
    ++item.product_count;
    this.sumPrice();  
  }

  //离开的时候保存购物车数据
   ionViewWillLeave(){
       this.storage.set('carts_data',this.list);
   }

   //全选反选
 //ionChange  事件只要checkbox改变就会触发
   checkAll(){  /*按钮*/
      console.log(this.isChencked);


      if(this.isChencked){ /*选中*/

         for(let i=0;i<this.list.length;i++){
            this.list[i].checked=false;   
         }

         this.isChencked=false;


      }else{
         for(let i=0;i<this.list.length;i++){          
            this.list[i].checked=true;              
         }
         this.isChencked=true; 
      }

   }
   //获取选中的数量

   getChenckNum(){
      let sum=0;

      for(let i=0;i<this.list.length;i++){          
          if(this.list[i].checked==true){
            sum+=1;
          }
      }
      return sum;

   }

  //执行删除操作

  doDelete(){

        var noCheckedArr=[];      
  
        for(var i=0;i<this.list.length;i++){
          if(!this.list[i].checked){
  
            noCheckedArr.push(this.list[i]);
          }
  
        }

        //改变当前数据

        this.list=noCheckedArr;

        this.list.length>0?this.hasData=true:this.hasData=false;

        //重新写入localstorage
        this.storage.set('carts_data',noCheckedArr);

  }


   //去结算  去订单页面

   doPay(){

    //获取购物车选中的数据

      var tempArr=[];    

      for(var i=0;i<this.list.length;i++){
        if(this.list[i].checked){

          tempArr.push(this.list[i]);
        }

      }
      //选中的数据
      // console.log(tempArr);
      //保存订单数据

      if(tempArr.length>0){
        this.storage.set('order_data',tempArr);
        this.navCtrl.push(OrderPage);
      }else{

        alert('您还没有选中数据');
      }

      

          
   

   }
}
