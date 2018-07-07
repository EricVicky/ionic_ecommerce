import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';


//增加收货地址
import { AddaddressPage } from '../addaddress/addaddress';


//工具的服务


import { ToolsProvider } from '../../providers/tools/tools';


//请求数据

import { HttpServicesProvider } from '../../providers/http-services/http-services';


//修改收货地址
import { EditaddressPage } from '../editaddress/editaddress';


/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {

  public list=[];

  public AddaddressPage=AddaddressPage;

  public userinfo='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public tools:ToolsProvider,public httpService:HttpServicesProvider,public alertCtrl: AlertController) {
    // this.tools.sign();

    
  }
  ionViewWillEnter(){

    this.userinfo=this.tools.getUserInfo();
    this.getAddressList();    
  }
  //获取当前用户的收货地址
  getAddressList(){

    //签名

    let userinfo:any=this.userinfo;

    let json={
      uid:userinfo._id,   /*注意用户id   _id*/
      salt:userinfo.salt
    }
    let sign=this.tools.sign(json);

    //请求数据
    var api='api/addressList?uid='+userinfo._id+'&sign='+sign;
    this.httpService.requestData(api,(data)=>{
      console.log(data);

      if(data.success){
        this.list=data.result;

      }else{

        alert(data.message);
      }
    })

  }

  //改变收货地址
  changeAddress(id){

    // alert(id);

    //签名

    let userinfo:any=this.userinfo;
    
    let json={
      uid:userinfo._id,   /*注意用户id   _id*/
      salt:userinfo.salt,
      id:id
    }
    let sign=this.tools.sign(json);

    var  api='api/changeDefaultAddress';

    this.httpService.doPost(api,{
      uid:userinfo._id,   /*注意用户id   _id*/
      sign:sign,
      id:id
    },(data)=>{
      // console.log(data);

      if(data.success){
        this.navCtrl.pop();  /*返回*/
      }else{

        alert(data.message)
      }

    })

  }
  //删除数据
  deleteAddress(key,id){

    let that:any=this;

    let confirm = this.alertCtrl.create({
      title: '提示信息?',
      message: '您确定要删除吗?',
      buttons: [
        {
          text: '取消',
          handler: () => {
          
          }
        },
        {
          text: '确定',
          handler: () => {
           
            // console.log(key,id);

            //服务器删除
            that.deleteAddressAction(key,id);


          }
        }
      ]
    });
    confirm.present();
  }

  deleteAddressAction(key,address_id){

    let userinfo:any=this.userinfo;

    let json={
      uid:userinfo['_id'],
      salt:userinfo['salt'],
      id:address_id
    }

    let sign=this.tools.sign(json);

    let api='api/deleteAddress';

    //请求数据

    this.httpService.doPost(api,{
      uid:userinfo['_id'],
      sign:sign,
      id:address_id
    },(data)=>{

      if(data.success){   /*成功*/          
        this.list.splice(key,1);
      }else{

          alert(data.message);
      }
     
    })

  }

  //编辑页面

  editAddress(item){


    this.navCtrl.push(EditaddressPage,{
      item:item
    })


  }



}
