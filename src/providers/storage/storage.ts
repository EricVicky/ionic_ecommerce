import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: Http) {
    console.log('Hello StorageProvider Provider');
  }
  //localStorage

  set(key,value){

    localStorage.setItem(key,JSON.stringify(value));  /*对象转换成字符串*/
  }

  get(key){
    return JSON.parse(localStorage.getItem(key));   /*字符串转换成对象*/
  }
  remove(key){

    localStorage.removeItem(key);
  }

}
