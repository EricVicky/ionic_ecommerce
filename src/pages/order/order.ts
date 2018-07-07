import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { LoginPage } from '../login/login';

//引入收货地址页面

import { AddressPage } from '../address/address';


import { StorageProvider } from '../../providers/storage/storage';
import { ConfigProvider } from '../../providers/config/config';

import { HttpServicesProvider } from '../../providers/http-services/http-services';

//工具服务
import { ToolsProvider } from '../../providers/tools/tools';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  public list=[];
  public LoginPage=LoginPage;
  public AddressPage=AddressPage;

  public userinfo='';
  public address='';
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:StorageProvider,public httpService:HttpServicesProvider,public config:ConfigProvider,public tools:ToolsProvider) {
  
  }

  ionViewWillEnter(){
    //获取用户信息
    this.userinfo=this.tools.getUserInfo();
    //获取订单信息
    this.list=this.storage.get('order_data');
    // console.log(this.list);
    if(this.userinfo)  /*用户登录*/
    {
      this.getDefaultAddress();
    }
    
  }

  ionViewDidEnter(){
     
  }

  //获取默认收货地址

  getDefaultAddress(){

    //获取签名
    let userinfo:any=this.userinfo;

    let json={
      uid:userinfo['_id'],
      salt:userinfo.salt
    }
    let sign=this.tools.sign(json);

    //请求数据
    let api='api/oneAddressList?uid='+userinfo['_id']+'&sign='+sign;

    this.httpService.requestData(api,(data)=>{

      // console.log(data);
      if(data.success){

        console.log(data.result);

        // this.address=''
        this.address=data.result[0];
        
      }else{
        this.address=''

      }

    })



  }

}
