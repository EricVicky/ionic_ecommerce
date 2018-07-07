import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//配置文件
import { StorageProvider } from '../../providers/storage/storage';

//npm install ts-md5 --save

import {Md5} from "ts-md5/dist/md5";

/*
  Generated class for the ToolsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToolsProvider {
  

  constructor(public http: Http,public storage:StorageProvider) {
    console.log('Hello ToolsProvider Provider');
  }
  //获取用户信息
  getUserInfo(){
    var userinfo=this.storage.get('userinfo');
    if(userinfo){
      return userinfo;
    }else{

      return '';
    }
  }

  sign(json){ 
    //
    // console.log(Md5.hashStr("123456"));
    // json={

    //   age:20,name:'zhangsan'
    // }
    var tempArr=[];
    for(let attr in json){
      tempArr.push(attr);
    }
    //排序
    tempArr=tempArr.sort();
    var tempStr='';
    for(let i=0;i<tempArr.length;i++){
      tempStr+=tempArr[i]+json[tempArr[i]];

    }
    
    return Md5.hashStr(tempStr);
  }

}
