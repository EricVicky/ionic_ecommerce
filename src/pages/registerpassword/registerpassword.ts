import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';

import { HttpServicesProvider } from '../../providers/http-services/http-services';
/**
 * Generated class for the RegisterpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registerpassword',
  templateUrl: 'registerpassword.html',
})
export class RegisterpasswordPage {

  public tel='';

  public code='';

  public password='';

  public rpassword='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpService:HttpServicesProvider,public storage:StorageProvider) {

    this.tel=storage.get('reg_tel');

    this.code=storage.get('reg_code');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterpasswordPage');
  }


  //执行注册

  doRegister(){
      if(this.password!=this.rpassword){

        alert('确认密码和密码不一样');
      }else if(this.password.length<6){
        alert('密码长度不能小于6位');

      }else{

          //提交数据

          var api='api/register';
          this.httpService.doPost(api,{"tel":this.tel,"code":this.code,'password':this.password},(result)=>{
             
              console.log(result);

              if(result.success){
                  //保存用户信息
                  this.storage.set('userinfo',result.userinfo[0]);

                  //返回到用户中心 注册成功

                  //http://ionicframework.com/docs/api/navigation/NavController/#popToRoot

                  this.navCtrl.popToRoot();   /*回到根页面*/



              }else{

                alert('注册失败');
              }


          })


      }

  }
}


