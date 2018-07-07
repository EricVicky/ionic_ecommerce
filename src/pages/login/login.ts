import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { StorageProvider } from '../../providers/storage/storage';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

//定义数据

public history='';

  public userinfo={
    username:'',
    password:''
  }

  constructor(public navCtrl: NavController, public navParams:NavParams ,public httpService:HttpServicesProvider,public storage:StorageProvider) {

      this.history=this.navParams.get('history');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(){
    //1.this.userinfo 表单信息

    //2.请求接口 完成登录功能

    // console.log(this.userinfo);   //{username: "3214324", password: "324"}

    if(this.userinfo.username.length<6){
      alert('用户名不合法');
    }else{

        var api='api/doLogin';

        this.httpService.doPost(api,this.userinfo,(data)=>{

          // console.log(data);

          if(data.success){//登录成功
              this.storage.set('userinfo',data.userinfo[0]);

              if(this.history=='order'){
             
                this.navCtrl.pop();  /*返回上一个页面*/
              }else{
                this.navCtrl.popToRoot(); /*回到根页面*/
                
              }
            
          }else{
            alert(data.message);
          }

        })
     }



  }

}
