import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { ToolsProvider } from '../../providers/tools/tools';


//请求数据

import { HttpServicesProvider } from '../../providers/http-services/http-services';


/**
 * Generated class for the EditaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editaddress',
  templateUrl: 'editaddress.html',
})
export class EditaddressPage {

  public addressList:any=[]

  constructor(public navCtrl: NavController, public navParams: NavParams,public tools:ToolsProvider,public httpService:HttpServicesProvider) {
    // console.log(this.navParams.get('item'));
    
  }


  ionViewWillEnter(){
    this.addressList=this.navParams.get('item');

    console.log(this.addressList);
  }


  editAddress(){

    // 执行修改操作


    if(this.addressList.name!=''||this.addressList.phone!=''||this.addressList.address!=''){
      //获取表单的内容
          let unserinfo=this.tools.getUserInfo();


          let json={
            id:this.addressList._id,     /*收货地址的id*/
            uid:unserinfo._id,
            salt:unserinfo.salt,
            name:this.addressList.name,
            phone:this.addressList.phone,
            address:this.addressList.address
          }

          console.log(json);

          let sign=this.tools.sign(json); /*生成签名*/
          var  api='api/editAddress';
          this.httpService.doPost(api,{
            id:this.addressList._id,     /*收货地址的id*/
            uid:unserinfo._id,
            sign:sign,
            name:this.addressList.name,
            phone:this.addressList.phone,
            address:this.addressList.address
          },(data)=>{
            // console.log(data); 
            if(data.success){/*增加成功 返回到地址列表*/
                this.navCtrl.pop();
            }else{
              alert(data.message)
            }
          })

      }else{      
          alert('收货地址不对');
      }

  }

}
