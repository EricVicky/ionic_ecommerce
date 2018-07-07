webpackJsonp([13],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//工具的服务

//请求数据

var AddaddressPage = (function () {
    function AddaddressPage(navCtrl, navParams, tools, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tools = tools;
        this.httpService = httpService;
        this.addressList = {
            name: '',
            phone: '',
            address: ''
        };
    }
    AddaddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddaddressPage');
    };
    AddaddressPage.prototype.addAddress = function () {
        var _this = this;
        if (this.addressList.name != '' || this.addressList.phone != '' || this.addressList.address != '') {
            //获取表单的内容
            var unserinfo = this.tools.getUserInfo();
            var json = {
                uid: unserinfo._id,
                salt: unserinfo.salt,
                name: this.addressList.name,
                phone: this.addressList.phone,
                address: this.addressList.address
            };
            var sign = this.tools.sign(json); /*生成签名*/
            var api = 'api/addAddress';
            this.httpService.doPost(api, {
                uid: unserinfo._id,
                sign: sign,
                name: this.addressList.name,
                phone: this.addressList.phone,
                address: this.addressList.address
            }, function (data) {
                // console.log(data); 
                if (data.success) {
                    _this.navCtrl.pop();
                }
                else {
                    alert(data.message);
                }
            });
        }
        else {
            alert('收货地址不对');
        }
    };
    return AddaddressPage;
}());
AddaddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addaddress',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\addaddress\addaddress.html"*/'<!--\n  Generated template for the AddaddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>增加地址</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list class="login_list">        \n    <ion-item>\n      <ion-label fixed>姓名:</ion-label>\n      <ion-input type="text" placeholder="姓名" [(ngModel)]=\'addressList.name\'></ion-input>\n    </ion-item>        \n    <ion-item>\n        <ion-label fixed>电话号码:</ion-label>\n        <ion-input type="text" placeholder="电话号码"  [(ngModel)]=\'addressList.phone\'></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label fixed>收货地址:</ion-label>\n        <ion-input type="text" placeholder="收货地址"  [(ngModel)]=\'addressList.address\'></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n    <button ion-button block color="danger" (click)="addAddress()">+增加</button>\n  </ion-content>\n  '/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\addaddress\addaddress.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
], AddaddressPage);

//# sourceMappingURL=addaddress.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addaddress_addaddress__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editaddress_editaddress__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//增加收货地址

//工具的服务

//请求数据

//修改收货地址

/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressPage = (function () {
    function AddressPage(navCtrl, navParams, tools, httpService, alertCtrl) {
        // this.tools.sign();
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tools = tools;
        this.httpService = httpService;
        this.alertCtrl = alertCtrl;
        this.list = [];
        this.AddaddressPage = __WEBPACK_IMPORTED_MODULE_2__addaddress_addaddress__["a" /* AddaddressPage */];
        this.userinfo = '';
    }
    AddressPage.prototype.ionViewWillEnter = function () {
        this.userinfo = this.tools.getUserInfo();
        this.getAddressList();
    };
    //获取当前用户的收货地址
    AddressPage.prototype.getAddressList = function () {
        //签名
        var _this = this;
        var userinfo = this.userinfo;
        var json = {
            uid: userinfo._id,
            salt: userinfo.salt
        };
        var sign = this.tools.sign(json);
        //请求数据
        var api = 'api/addressList?uid=' + userinfo._id + '&sign=' + sign;
        this.httpService.requestData(api, function (data) {
            console.log(data);
            if (data.success) {
                _this.list = data.result;
            }
            else {
                alert(data.message);
            }
        });
    };
    //改变收货地址
    AddressPage.prototype.changeAddress = function (id) {
        // alert(id);
        var _this = this;
        //签名
        var userinfo = this.userinfo;
        var json = {
            uid: userinfo._id,
            salt: userinfo.salt,
            id: id
        };
        var sign = this.tools.sign(json);
        var api = 'api/changeDefaultAddress';
        this.httpService.doPost(api, {
            uid: userinfo._id,
            sign: sign,
            id: id
        }, function (data) {
            // console.log(data);
            if (data.success) {
                _this.navCtrl.pop(); /*返回*/
            }
            else {
                alert(data.message);
            }
        });
    };
    //删除数据
    AddressPage.prototype.deleteAddress = function (key, id) {
        var that = this;
        var confirm = this.alertCtrl.create({
            title: '提示信息?',
            message: '您确定要删除吗?',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        // console.log(key,id);
                        //服务器删除
                        that.deleteAddressAction(key, id);
                    }
                }
            ]
        });
        confirm.present();
    };
    AddressPage.prototype.deleteAddressAction = function (key, address_id) {
        var _this = this;
        var userinfo = this.userinfo;
        var json = {
            uid: userinfo['_id'],
            salt: userinfo['salt'],
            id: address_id
        };
        var sign = this.tools.sign(json);
        var api = 'api/deleteAddress';
        //请求数据
        this.httpService.doPost(api, {
            uid: userinfo['_id'],
            sign: sign,
            id: address_id
        }, function (data) {
            if (data.success) {
                _this.list.splice(key, 1);
            }
            else {
                alert(data.message);
            }
        });
    };
    //编辑页面
    AddressPage.prototype.editAddress = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__editaddress_editaddress__["a" /* EditaddressPage */], {
            item: item
        });
    };
    return AddressPage;
}());
AddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-address',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\address\address.html"*/'<!--\n  Generated template for the AddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>收货地址</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-list  class="address_list">\n  <ion-item *ngFor="let item of list;let key=index">        \n    <button ion-button clear item-start icon-only *ngIf="item.default_address">\n        <ion-icon name="md-checkmark" color="danger"></ion-icon>\n    </button>\n   <div (tap)="changeAddress(item._id)" (press)="deleteAddress(key,item._id)">\n      <h2>{{item.name}}   {{item.phone}}</h2>\n      <p>{{item.address}}</p>\n   </div>\n\n    <button ion-button clear item-end icon-only (tap)="editAddress(item)">\n      <ion-icon name="ios-create-outline"></ion-icon>\n    </button>\n  </ion-item>\n\n</ion-list>\n\n\n</ion-content>\n\n\n\n<ion-footer>\n    <ion-toolbar>\n      \n      <div class="add_address" [navPush]=\'AddaddressPage\'>\n        +新建地址\n      </div>\n    </ion-toolbar>\n  </ion-footer>\n  \n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\address\address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AddressPage);

//# sourceMappingURL=address.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditaddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//请求数据

/**
 * Generated class for the EditaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditaddressPage = (function () {
    function EditaddressPage(navCtrl, navParams, tools, httpService) {
        // console.log(this.navParams.get('item'));
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tools = tools;
        this.httpService = httpService;
        this.addressList = [];
    }
    EditaddressPage.prototype.ionViewWillEnter = function () {
        this.addressList = this.navParams.get('item');
        console.log(this.addressList);
    };
    EditaddressPage.prototype.editAddress = function () {
        // 执行修改操作
        var _this = this;
        if (this.addressList.name != '' || this.addressList.phone != '' || this.addressList.address != '') {
            //获取表单的内容
            var unserinfo = this.tools.getUserInfo();
            var json = {
                id: this.addressList._id,
                uid: unserinfo._id,
                salt: unserinfo.salt,
                name: this.addressList.name,
                phone: this.addressList.phone,
                address: this.addressList.address
            };
            console.log(json);
            var sign = this.tools.sign(json); /*生成签名*/
            var api = 'api/editAddress';
            this.httpService.doPost(api, {
                id: this.addressList._id,
                uid: unserinfo._id,
                sign: sign,
                name: this.addressList.name,
                phone: this.addressList.phone,
                address: this.addressList.address
            }, function (data) {
                // console.log(data); 
                if (data.success) {
                    _this.navCtrl.pop();
                }
                else {
                    alert(data.message);
                }
            });
        }
        else {
            alert('收货地址不对');
        }
    };
    return EditaddressPage;
}());
EditaddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editaddress',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\editaddress\editaddress.html"*/'<!--\n  Generated template for the AddaddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>修改地址</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list class="login_list">        \n    <ion-item>\n      <ion-label fixed>姓名:</ion-label>\n      <ion-input type="text" placeholder="姓名" [(ngModel)]=\'addressList.name\'></ion-input>\n    </ion-item>        \n    <ion-item>\n        <ion-label fixed>电话号码:</ion-label>\n        <ion-input type="text" placeholder="电话号码"  [(ngModel)]=\'addressList.phone\'></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label fixed>收货地址:</ion-label>\n        <ion-input type="text" placeholder="收货地址"  [(ngModel)]=\'addressList.address\'></ion-input>\n    </ion-item>\n  </ion-list>\n\n\n    <button ion-button block color="danger" (click)="editAddress()">修改</button>\n  </ion-content>\n  '/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\editaddress\editaddress.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_tools_tools__["a" /* ToolsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
], EditaddressPage);

//# sourceMappingURL=editaddress.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__address_address__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_tools_tools__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//引入收货地址页面




//工具服务

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = (function () {
    function OrderPage(navCtrl, navParams, storage, httpService, config, tools) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.config = config;
        this.tools = tools;
        this.list = [];
        this.LoginPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.AddressPage = __WEBPACK_IMPORTED_MODULE_3__address_address__["a" /* AddressPage */];
        this.userinfo = '';
        this.address = '';
    }
    OrderPage.prototype.ionViewWillEnter = function () {
        //获取用户信息
        this.userinfo = this.tools.getUserInfo();
        //获取订单信息
        this.list = this.storage.get('order_data');
        // console.log(this.list);
        if (this.userinfo) {
            this.getDefaultAddress();
        }
    };
    OrderPage.prototype.ionViewDidEnter = function () {
    };
    //获取默认收货地址
    OrderPage.prototype.getDefaultAddress = function () {
        var _this = this;
        //获取签名
        var userinfo = this.userinfo;
        var json = {
            uid: userinfo['_id'],
            salt: userinfo.salt
        };
        var sign = this.tools.sign(json);
        //请求数据
        var api = 'api/oneAddressList?uid=' + userinfo['_id'] + '&sign=' + sign;
        this.httpService.requestData(api, function (data) {
            // console.log(data);
            if (data.success) {
                console.log(data.result);
                // this.address=''
                _this.address = data.result[0];
            }
            else {
                _this.address = '';
            }
        });
    };
    return OrderPage;
}());
OrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\order\order.html"*/'<!--\n  Generated template for the OrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>确认订单</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n      <div class="order">\n          <div class="address_list">\n\n            <ion-list *ngIf="userinfo && !address">\n                <ion-item [navPush]=\'AddressPage\'>\n                    <ion-icon name="ios-pin-outline" item-start></ion-icon>\n\n                    请添加您的收货地址\n                    <ion-icon name="ios-arrow-forward"  item-end></ion-icon>\n\n                </ion-item>\n            </ion-list>\n\n\n            <ion-list *ngIf="userinfo && address">\n              <ion-item [navPush]=\'AddressPage\'>\n                  <h2>{{address.name}}   {{address.phone}}</h2>\n                  <p>{{address.address}}</p>\n                  <ion-icon name="ios-arrow-forward"  item-end></ion-icon>\n              </ion-item>\n          </ion-list>\n\n\n\n            <ion-list *ngIf="!userinfo">\n                <ion-item class="nologin">                \n                    <p>您还没有登录，登录后同步您的订单信息...</p>\n                    <button ion-button color="light"  [navPush]=\'LoginPage\' [navParams]="{history:\'order\'}">登录</button>\n                    \n                </ion-item>\n            </ion-list>\n\n          </div>\n\n          <div class="product_list">\n\n              <ion-list>\n                <ion-item *ngFor="let item of list" >\n                  <ion-thumbnail item-left>\n                    <img [src]="config.apiUrl+item.product_pic" />\n                  </ion-thumbnail>\n                  <h2>{{item.product_title}}</h2>\n                  <p><span class="price">¥{{item.product_price}}</span> <span class="count">x{{item.product_count}}</span></p>\n                  \n                  <p>属性：{{item.product_attr}}</p>\n\n                </ion-item>\n              </ion-list>\n\n\n                <ion-list inset class="submit_info">\n                    <ion-item>                   \n                      <p>在线支付</p>\n                      <p>京东快递+快递运输</p>\n                      <p>工作日、双休日于假日均可送货</p>\n                    \n                    </ion-item>\n                    <ion-item-divider>\n                      \n                    </ion-item-divider>\n                    <ion-item class="order_price">\n                        <ul>\n                          <li>商品总金额 <span>¥124214</span></li>\n                          <li>立减 <span>-¥5</span></li>\n                          <li>运费 <span>+¥0</span></li>\n                        </ul>\n                    </ion-item>\n\n                    <ion-item-divider>\n                      \n                    </ion-item-divider>\n                    <ion-item>\n                        <input type="text" placeholder="选填:给商家留言45字以内" />\n                    </ion-item>\n              \n                </ion-list>\n          </div>\n    </div>\n  \n</ion-content>\n\n\n\n<ion-footer>\n    <ion-toolbar>\n      <div class="order_footer">\n  \n        <span>实付款: ¥2934</span>\n       \n        <div class="buy_order">\n            立即下单\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\order\order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_tools_tools__["a" /* ToolsProvider */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PcontentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//购物车页面

/**
 * Generated class for the PcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PcontentPage = (function () {
    function PcontentPage(navCtrl, navParams, config, httpService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.httpService = httpService;
        this.storage = storage;
        this.CartPage = __WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */];
        this.tabs = 'plist'; /*商品列表选中*/
        this.item = []; /*商品列表*/
        this.num = 1; /*商品数量*/
        this.carts_num = 0;
        // console.log(this.navParams.data.id);
        this.requestData(this.navParams.data.id);
        //计算购物车的数量
        this.carts_num = this.getCartsNum();
    }
    PcontentPage.prototype.ionViewDidLoad = function () {
        this.bindEvent();
    };
    PcontentPage.prototype.requestData = function (id) {
        var _this = this;
        //http://39.108.159.135/api/pcontent?id=59f6a2d27ac40b223cfdcf81
        var api = 'api/pcontent?id=' + id;
        this.httpService.requestData(api, function (data) {
            console.log(data);
            _this.item = data.result;
        });
    };
    //绑定事件的方法
    PcontentPage.prototype.bindEvent = function () {
        // console.log(this.myattr.nativeElement);
        var attrDom = this.myattr.nativeElement;
        attrDom.onclick = function (e) {
            // console.log(e.srcElement.nodeName);  //元素名称
            // console.log(e.target);  //DOM节点
            if (e.srcElement.nodeName == 'SPAN') {
                var ele = e.target; /*获取点击的元素       注意*/
                var parentNode = ele.parentNode; /*获取当前元素的父节点*/
                var children = parentNode.children; /*获取父节点下面的所有子节点  去掉空白节点*/
                for (var i = 0; i < children.length; i++) {
                    children[i].className = '';
                }
                ele.className = 'active';
            }
        };
    };
    //加入购物车
    PcontentPage.prototype.addCart = function () {
        //获取商品数据
        var product_title = this.item['title'];
        var product_id = this.item['_id'];
        var product_pic = this.item['pic'];
        var product_price = this.item['price'];
        var product_count = this.num; /*商品数量*/
        //商品的属性
        var product_attr = '';
        //es5 获取dom节点的方式
        var activeDom = document.querySelectorAll('#myattr .active');
        // console.log(activeDom);
        for (var i = 0; i < activeDom.length; i++) {
            product_attr += activeDom[i].innerHTML;
        }
        var json = {
            'product_title': product_title,
            'product_id': product_id,
            product_pic: product_pic,
            product_price: product_price,
            product_count: product_count,
            product_attr: product_attr,
            checked: true /*默认加入购物车 数据选中*/
        };
        // console.log(json);
        //加入购物车保存到localstorage   如果存在 当前数量+1  如果不存在写入
        var storageData = this.storage.get('carts_data');
        if (storageData) {
            //判断购物车里面有没有当前这条数据  
            if (this.hasData(storageData, json.product_id)) {
                //修改刚才购物车里面的数量
                for (var i = 0; i < storageData.length; i++) {
                    if (storageData[i].product_id == product_id) {
                        storageData[i].product_count += json.product_count; /*以前的数量加上选择的数量*/
                    }
                }
            }
            else {
                storageData.push(json);
            }
            //重新写入
            this.storage.set('carts_data', storageData);
        }
        else {
            var tempArr = [];
            tempArr.push(json);
            this.storage.set('carts_data', tempArr);
        }
        this.carts_num += json.product_count; /*点击加入购物车改变 购物车数量*/
    };
    //增加数量
    PcontentPage.prototype.incNum = function () {
        this.num += 1;
    };
    //减少数量
    PcontentPage.prototype.decNum = function () {
        if (this.num > 1) {
            this.num -= 1;
        }
    };
    //判断购物车有没有数据
    PcontentPage.prototype.hasData = function (storageData, product_id) {
        if (storageData) {
            for (var i = 0; i < storageData.length; i++) {
                if (storageData[i].product_id == product_id) {
                    return true; /*有数据*/
                }
            }
        }
        return false;
    };
    //获取购物车数量
    PcontentPage.prototype.getCartsNum = function () {
        var num = 0;
        var storageData = this.storage.get('carts_data');
        if (storageData) {
            for (var i = 0; i < storageData.length; i++) {
                num += storageData[i].product_count;
            }
        }
        return num;
    };
    return PcontentPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myattr'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PcontentPage.prototype, "myattr", void 0);
PcontentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pcontent',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\pcontent\pcontent.html"*/'<!--\n  Generated template for the PcontentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n    <ion-segment [(ngModel)]="tabs">\n      <ion-segment-button value="plist">\n        商品\n      </ion-segment-button>\n      <ion-segment-button value="pcontent">\n        详情\n      </ion-segment-button>\n\n     \n    </ion-segment>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div class="p_content">\n\n        <div [ngSwitch]="tabs">\n          <div class="con_1" *ngSwitchCase="\'plist\'">\n              <div class="p_img">\n                  <img [src]="config.apiUrl+item.pic" />            \n              </div>\n              <div class="p_info mb10">\n                  <div class="p_title">\n                      <h2>{{item.title}}</h2>\n                      <p>{{item.sub_title}}</p>\n                  </div>\n\n                  <div class="product_price mb10">\n                      <span class="now_price">特价：<span class="price">¥{{item.price}}</span></span> 　 　原价：<span class="old_price"> ¥{{item.old_price}}</span>  \n                  </div>\n              </div>\n\n              <div class="p_attr mb10">\n\n\n                      <div #myattr id="myattr">    \n                        <div *ngIf="item.attr">\n\n                            <div class="color" *ngFor="let attr of item.attr">\n                                <strong>{{attr.cate}}:</strong> \n                                <span *ngFor="let a of attr.list;let key=index;" [ngClass]="{\'active\':key==0}">\n                                  {{a}}\n                                </span>\n                          </div>\n                          \n                        </div>\n\n                      </div>\n                      <div class="number">\n                \n                                    <strong>数量:</strong>\n                \n                                    <div class="cart_number">\n                                        <div class="input_left" (tap)="decNum()">-</div>\n                                          <div class="input_center">\n                                              <input type="text"  readonly="readonly" [(ngModel)]=\'num\' name="num" id="num" />\n                                          </div>\n                                          <div class="input_right" (tap)="incNum()">+</div>\n                                    </div>\n                          \n                          </div>\n\n                  \n               </div>\n\n               <div class="fee mb10">\n                  运费:免运费\n                </div>\n\n          </div>\n        \n          <div class="con_2" *ngSwitchCase="\'pcontent\'">\n\n            <!-- 注意绑定html的方法 -->\n              <div [innerHTML]=\'item.content\'>\n               \n              </div>\n          </div>\n          \n        </div>\n\n      </div>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n      <div class="footer_bar">\n        <div class="carticon" [navPush]="CartPage">            \n            <ion-icon name="cart"></ion-icon> \n            <p>购物车</p>\n            <ion-badge color="danger">{{carts_num}}</ion-badge>\n        </div>\n        \n        <div class="addcart" (click)="addCart()">\n            加入购物车\n        </div>\n        <div class="buy">\n\n            立即购买\n        </div>\n      </div>\n\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\pcontent\pcontent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */]])
], PcontentPage);

//# sourceMappingURL=pcontent.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductlistPage = (function () {
    function ProductlistPage(navCtrl, config, navParams, httpService) {
        //获取传值
        // console.log(this.navParams.get('cid'));
        this.navCtrl = navCtrl;
        this.config = config;
        this.navParams = navParams;
        this.httpService = httpService;
        this.list = []; /*模拟商品数据*/
        this.cid = ''; /*获取分类id*/
        this.page = 1; /*分页*/
        this.cid = this.navParams.get('cid');
        this.getProductList('');
    }
    ProductlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductlistPage');
    };
    ProductlistPage.prototype.getProductList = function (infiniteScroll) {
        var _this = this;
        var api = 'api/plist?cid=' + this.cid + '&page=' + this.page;
        this.httpService.requestData(api, function (data) {
            // console.log(data);
            _this.list = _this.list.concat(data.result); /*数据拼接*/
            if (infiniteScroll) {
                //告诉ionic 请求数据完成
                infiniteScroll.complete();
                if (data.result.length < 10) {
                    infiniteScroll.enable(false);
                }
            }
            ;
            _this.page++;
        });
    };
    //加载更多
    ProductlistPage.prototype.doLoadMore = function (infiniteScroll) {
        this.getProductList(infiniteScroll);
    };
    return ProductlistPage;
}());
ProductlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-productlist',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\productlist\productlist.html"*/'<!--\n  Generated template for the ProductlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n        <ion-searchbar></ion-searchbar>\n    \n        <ion-buttons end>\n          <button ion-button>\n             搜索\n          </button>\n        </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>  \n            \n      <div class="list_content">\n    \n          <div class="sub_header">\n              <div>综合</div>\n              <div>销量</div>\n              <div>价格</div>          \n          </div>\n    \n           <ion-list inset>\n             <ion-item *ngFor="let item of list" >\n               <ion-thumbnail item-left>\n                  <img [src]="config.apiUrl+item.s_pic"  />            \n               </ion-thumbnail>\n               <h2> {{item.title}}</h2>\n               <p>价格:<span class="price">{{item.price}}</span>元</p>           \n             </ion-item>\n           </ion-list>\n\n           <ion-infinite-scroll (ionInfinite)="doLoadMore($event)">\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n         \n      </div>\n    \n</ion-content>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\productlist\productlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
], ProductlistPage);

//# sourceMappingURL=productlist.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterpasswordPage = (function () {
    function RegisterpasswordPage(navCtrl, navParams, httpService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.tel = '';
        this.code = '';
        this.password = '';
        this.rpassword = '';
        this.tel = storage.get('reg_tel');
        this.code = storage.get('reg_code');
    }
    RegisterpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterpasswordPage');
    };
    //执行注册
    RegisterpasswordPage.prototype.doRegister = function () {
        var _this = this;
        if (this.password != this.rpassword) {
            alert('确认密码和密码不一样');
        }
        else if (this.password.length < 6) {
            alert('密码长度不能小于6位');
        }
        else {
            //提交数据
            var api = 'api/register';
            this.httpService.doPost(api, { "tel": this.tel, "code": this.code, 'password': this.password }, function (result) {
                console.log(result);
                if (result.success) {
                    //保存用户信息
                    _this.storage.set('userinfo', result.userinfo[0]);
                    //返回到用户中心 注册成功
                    //http://ionicframework.com/docs/api/navigation/NavController/#popToRoot
                    _this.navCtrl.popToRoot(); /*回到根页面*/
                }
                else {
                    alert('注册失败');
                }
            });
        }
    };
    return RegisterpasswordPage;
}());
RegisterpasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registerpassword',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\registerpassword\registerpassword.html"*/'<!--\n  Generated template for the RegisterpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>输入密码</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-list> \n      <ion-item>\n          <ion-label fixed>密　　码:</ion-label>\n          <ion-input type="password" [(ngModel)]=\'password\' placeholder=\'请输入密码\'></ion-input>\n       </ion-item>\n\n       <ion-item>\n          <ion-label fixed>确认密码:</ion-label>\n          <ion-input type="password" [(ngModel)]=\'rpassword\' placeholder=\'请输入密码\'></ion-input>\n       </ion-item>\n\n       <ion-item no-lines class="list_end">\n          <span item-start>\n              密码由6-20位字母、数字、特殊符号组成，注意大小写\n          </span>\n         \n       </ion-item>\n </ion-list>\n\n <button ion-button block color="danger"  class="reg_btn" (click)="doRegister()">完成</button>\n  \n\n</ion-content>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\registerpassword\registerpassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], RegisterpasswordPage);

//# sourceMappingURL=registerpassword.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistersignPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registerpassword_registerpassword__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegistersignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistersignPage = (function () {
    function RegistersignPage(navCtrl, navParams, httpService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.code = ''; /*验证码*/
        this.isShowSend = false; /*是否显示发送验证码的按钮*/
        this.num = 10; /*倒计时的数量*/
        this.tel = '';
        this.tel = this.storage.get('reg_tel');
    }
    RegistersignPage.prototype.ionViewDidLoad = function () {
        this.doTimer(); /*倒计时*/
    };
    RegistersignPage.prototype.goRegisterpasswordPage = function () {
        var _this = this;
        //验证验证码是否成功
        var api = 'api/validateCode';
        this.httpService.doPost(api, { "tel": this.tel, "code": this.code }, function (result) {
            console.log(result); /*发送到手机的验证码返回方便我们验证*/
            if (result.success) {
                //保存验证码
                _this.storage.set('reg_code', _this.code);
                //跳转到下一个页面
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registerpassword_registerpassword__["a" /* RegisterpasswordPage */]);
            }
            else {
                alert('验证码输入错误');
            }
        });
    };
    //倒计时的方法
    RegistersignPage.prototype.doTimer = function () {
        var _this = this;
        var timer = setInterval(function () {
            --_this.num;
            if (_this.num == 0) {
                clearInterval(timer);
                _this.isShowSend = true;
            }
        }, 1000);
    };
    //发送验证码
    RegistersignPage.prototype.sendCode = function () {
        //获取电话号码
        var _this = this;
        // console.log('重新发送验证码')
        var api = 'api/sendCode';
        this.httpService.doPost(api, { "tel": this.tel }, function (result) {
            console.log(result); /*发送到手机的验证码返回方便我们验证*/
            if (result.success) {
                _this.num = 10; /*设置倒计时*/
                _this.doTimer(); /*倒计时*/
                _this.isShowSend = false; /*显示倒计时按钮*/
            }
            else {
                alert('发送验证码失败');
            }
        });
    };
    return RegistersignPage;
}());
RegistersignPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registersign',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\registersign\registersign.html"*/'<!--\n  Generated template for the RegistersignPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>输入验证码</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div class="code_info">\n        <h4 class="positive">马上验证手机，激活你的账户</h4>\n        <p class="code_sign_p">验证码已通过短信方式发送至{{tel}}，请输入验证码完成验证，手机绑定是为了验证用户的真实性和账号安全</p>\n    </div>\n\n    <div class="sign_page">\n\n        <input type="text" [(ngModel)]=\'code\' placeholder="验证码" />\n\n        <div class="timer" *ngIf="!isShowSend"> \n               倒计时({{num}})\n        </div>\n        <div class="timer" *ngIf="isShowSend" (tap)="sendCode()"> \n               重新发送\n         </div>\n\n    </div>\n\n    <button class="reg_btn" ion-button block color="danger" (click)="goRegisterpasswordPage()">下一步</button>\n    \n</ion-content>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\registersign\registersign.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */]])
], RegistersignPage);

//# sourceMappingURL=registersign.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registersign_registersign__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, httpService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        this.tel = ''; /*电话号码*/
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    //跳转到发送验证码
    RegisterPage.prototype.goRegistersignPage = function () {
        console.log(this.tel);
        // this.navCtrl.push(RegistersignPage);
        var _that = this;
        //电话号码是否合法的验证   
        if (/^\d{11}$/.test(this.tel)) {
            //注意 服务器要允许跨域
            var api = 'api/sendCode';
            this.httpService.doPost(api, { "tel": this.tel }, function (result) {
                console.log(result); /*发送到手机的验证码返回方便我们验证*/
                if (result.success) {
                    _that.storage.set('reg_tel', _that.tel); /*保存电话号码*/
                    _that.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registersign_registersign__["a" /* RegistersignPage */]); /*跳转到下个页面 验证验证码*/
                }
                else {
                    alert('发送验证码失败 ' + result.message);
                }
            });
        }
        else {
            alert('电话号码错误');
        }
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>输入手机号</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n                   \n     <div class="register_page">\n\n      <!-- MVVM -->\n\n            <input type="text" [(ngModel)]=\'tel\' placeholder="请输入手机号" />\n      </div>\n      \n    <button class="reg_btn" ion-button block color="danger" (click)="goRegistersignPage()">下一步</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_personal__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//引入账户设置页面


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = (function () {
    function UserPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.LoginPage = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.RegisterPage = __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */];
        this.PersonalPage = __WEBPACK_IMPORTED_MODULE_4__personal_personal__["a" /* PersonalPage */];
        this.userinfo = '';
        console.log('constructor');
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log("1.0 ionViewDidLoad 当页面加载的时候触发，仅在页面创建的  时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发");
    };
    UserPage.prototype.ionViewWillEnter = function () {
        console.log("2.0 ionViewWillEnter 顾名思义，当将要进入页面时触发 每次触发");
        //判断用户有没有登录
        var userinfo = this.storage.get('userinfo');
        if (userinfo && userinfo.username) {
            this.userinfo = userinfo;
        }
        else {
            this.userinfo = '';
        }
    };
    return UserPage;
}());
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\user\user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>用户中心</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="login" *ngIf="!userinfo">\n    <div class="userimg">\n      <img src="assets/imgs/user.png"  />\n    </div>\n\n    <div class="login_reg">\n        <button ion-button [navPush]=\'LoginPage\'>登录</button>\n        <button ion-button [navPush]=\'RegisterPage\'>注册</button>\n    </div>\n\n  </div>\n\n\n  <ion-list inset  *ngIf="userinfo">\n    <ion-item [navPush]="PersonalPage">\n            <ion-avatar item-left>\n                  <img src="xxx.png" onerror="this.src=\'assets/imgs/user.png\'" class="avatar">\n            </ion-avatar>                  \n            <h2>用户名:{{userinfo.username}}</h2>\n            <p>普通会员</p>\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n      </ion-item>\n  </ion-list>\n\n\n\n  <ion-list inset class="user_list">\n\n        <ion-item-divider >\n        </ion-item-divider>\n        <ion-item>\n            <ion-icon name="ios-paper-outline" item-start></ion-icon>\n            <span>全部订单</span>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-card-outline" item-start></ion-icon>\n            <span> 待付款</span>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-subway-outline" item-start></ion-icon>\n            <span>待收货</span>\n        </ion-item>\n\n        <ion-item-divider >\n        </ion-item-divider>\n        \n        <ion-item>\n            <ion-icon name="ios-star-outline" item-start></ion-icon>\n            <span>我的收藏</span>\n        </ion-item>\n        <ion-item>\n            <ion-icon name="ios-people-outline" item-start></ion-icon>\n            <span>在线客服</span>\n        </ion-item>\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\user\user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_storage_storage__["a" /* StorageProvider */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalPage = (function () {
    function PersonalPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    PersonalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalPage');
    };
    PersonalPage.prototype.loginOut = function () {
        //用户信息保存在localstorage
        this.storage.remove('userinfo');
        //跳转到用户中心
        this.navCtrl.popToRoot();
    };
    return PersonalPage;
}());
PersonalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-personal',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\personal\personal.html"*/'<!--\n  Generated template for the PersonalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>账户管理</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n    <ion-list inset class="personal">\n        <ion-item (click)="choosePicMenu()">\n             头像\n            <span class="item-note">\n                <img  src="assets/imgs/user.png" class="avatar"/>\n            </span>\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n        </ion-item>\n\n          <ion-item>\n            \n            用户名\n            <span class="item-note">\n              alibaba\n            </span>         \n            \n            <ion-icon name="ios-arrow-forward" item-end style="visibility:hidden"></ion-icon>\n          </ion-item>\n\n          <ion-item class="item-icon-right">\n              \n              昵称\n            <span class="item-note">\n              alibaba\n            </span>\n            <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n          </ion-item>\n\n          <ion-item  (click)="showSex()">            \n                性别\n              <span class="item-note">\n                男\n              </span>\n              <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n          </ion-item>\n\n          <ion-item>\n              出生日期\n              <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n          </ion-item>\n    </ion-list>\n\n    <button ion-button block color="danger" class="login_btn" (tap)="loginOut()">退出登录</button>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\personal\personal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], PersonalPage);

//# sourceMappingURL=personal.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, config, httpService, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.config = config;
        this.httpService = httpService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.flag = false; /*有没有关键词、关键词开关*/
        this.keywords = ''; /*关键词*/
        this.list = []; /*模拟商品数据*/
        this.page = 1; /*分页*/
        this.hasData = true; /*是否有数据*/
        this.historyList = []; /*历史记录的数据*/
        //获取历史记录
        this.getHistory();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.getSearchList = function (infiniteScroll) {
        var _this = this;
        if (!infiniteScroll) {
            this.page = 1;
            this.hasData = true;
            this.content.scrollToTop(0); /*回到顶部*/
            //调用保存历史记录的方法
            this.saveHistory();
        }
        // console.log(this.keywords);
        var api = 'api/plist?search=' + this.keywords + '&page=' + this.page;
        this.httpService.requestData(api, function (data) {
            if (_this.page == 1) {
                _this.list = data.result;
            }
            else {
                _this.list = _this.list.concat(data.result); /*拼接数据*/
            }
            _this.flag = true; /*显示商品列表*/
            if (infiniteScroll) {
                //告诉ionic 请求数据完成
                infiniteScroll.complete();
                /*没有数据停止上拉更新*/
                if (data.result < 10) {
                    _this.hasData = false;
                }
            }
            _this.page++;
        });
    };
    //点击历史记录执行的方法
    SearchPage.prototype.goSearch = function (keywords) {
        // console.log(keywords);
        this.keywords = keywords;
        this.getSearchList('');
    };
    //加载更多
    SearchPage.prototype.doLoadMore = function (infiniteScroll) {
        this.getSearchList(infiniteScroll);
    };
    //保存历史记录
    SearchPage.prototype.saveHistory = function () {
        /*
          1.localStorage获取历史记录
        */
        var history = this.storage.get('historyData');
        //2.判断历史记录存在不存在
        if (history) {
            // ['女装','手机','电脑','男装']
            if (history.indexOf(this.keywords) == -1) {
                history.push(this.keywords);
                //重新写入
                this.storage.set('historyData', history);
            }
        }
        else {
            this.historyList.push(this.keywords);
            // historyList： ['女装']
            //写入到localstorage
            this.storage.set('historyData', this.historyList);
        }
    };
    //获取历史记录
    SearchPage.prototype.getHistory = function () {
        var history = this.storage.get('historyData');
        if (history) {
            this.historyList = history;
        }
    };
    //删除历史记录
    SearchPage.prototype.removeHistory = function (keywords) {
        var _this = this;
        //提示
        var confirm = this.alertCtrl.create({
            title: '您确定要删除吗?',
            message: '您确定要删除这条历史记录吗，确定点击是，否则点击否。',
            buttons: [
                {
                    text: '否',
                    handler: function () {
                    }
                },
                {
                    text: '是',
                    handler: function () {
                        var index = _this.historyList.indexOf(keywords);
                        // console.log(index);
                        _this.historyList.splice(index, 1);
                        //写入到localstorage
                        _this.storage.set('historyData', _this.historyList);
                    }
                }
            ]
        });
        confirm.present();
    };
    return SearchPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], SearchPage.prototype, "content", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-searchbar [(ngModel)]="keywords"></ion-searchbar>\n\n    <ion-buttons end>\n      <button ion-button (tap)=\'getSearchList()\'>\n         搜索\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <div class="search_content" *ngIf="!flag">\n\n      <div class="hotlist">\n          \n              <h3 class="search_title">热搜</h3>\n          \n              <p>\n                <span>女装</span>\n                <span>男装</span>\n                <span>家具</span>\n                <span>化妆品</span>\n                <span>女装</span>    \n              </p>\n          \n            </div>\n          \n            <div class="history" *ngIf="historyList.length>0">\n              \n                 <h3 class="search_title">历史搜索</h3>\n                 <!-- 事件http://ionicframework.com/docs/components/#gestures -->\n                 <ion-list inset >\n                   <ion-item *ngFor="let item of historyList" (press)="removeHistory(item)" (tap)="goSearch(item)">\n                      {{item}}\n                   </ion-item>\n                \n                 </ion-list>\n              \n            </div>\n\n  </div>\n  \n\n\n  <div class="list_content"  *ngIf="flag">\n\n      <div class="sub_header">\n          <div>综合</div>\n          <div>销量</div>\n          <div>价格</div>          \n      </div>\n\n       <ion-list inset>\n        <ion-item *ngFor="let item of list" >\n          <ion-thumbnail item-left>\n             <img [src]="config.apiUrl+item.s_pic"  />            \n          </ion-thumbnail>\n          <h2> {{item.title}}</h2>\n          <p>价格:<span class="price">{{item.price}}</span>元</p>           \n        </ion-item>\n       </ion-list>\n\n\n       <ion-infinite-scroll (ionInfinite)="doLoadMore($event)" *ngIf="hasData">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_storage_storage__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//配置文件

/*
  Generated class for the HttpServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpServicesProvider = (function () {
    function HttpServicesProvider(http, jsonp, config) {
        this.http = http;
        this.jsonp = jsonp;
        this.config = config;
        //设置post的格式
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        console.log('Hello HttpServicesProvider Provider');
    }
    //请求数据
    // apiUrl :   api/focus
    // apiUrl :   api/plist?page=1
    HttpServicesProvider.prototype.requestData = function (apiUrl, callback) {
        if (apiUrl.indexOf('?') == -1) {
            var api = this.config.apiUrl + apiUrl + '?callback=JSONP_CALLBACK';
        }
        else {
            var api = this.config.apiUrl + apiUrl + '&callback=JSONP_CALLBACK';
            //  http://39.108.159.135/api/plist?is_best=1&callback=JSONP_CALLBACK
        }
        this.jsonp.get(api).subscribe(function (data) {
            // console.log(data);
            callback(data['_body']); /*回调函数*/
        }, function (err) {
            console.log(err);
        });
    };
    //post 提交数据
    HttpServicesProvider.prototype.doPost = function (apiUrl, json, callback) {
        var api = this.config.apiUrl + apiUrl;
        this.http.post(api, JSON.stringify(json), { headers: this.headers }).subscribe(function (res) {
            callback(res.json());
        });
    };
    return HttpServicesProvider;
}());
HttpServicesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */]])
], HttpServicesProvider);

//# sourceMappingURL=http-services.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = (function () {
    function StorageProvider(http) {
        this.http = http;
        console.log('Hello StorageProvider Provider');
    }
    //localStorage
    StorageProvider.prototype.set = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value)); /*对象转换成字符串*/
    };
    StorageProvider.prototype.get = function (key) {
        return JSON.parse(localStorage.getItem(key)); /*字符串转换成对象*/
    };
    StorageProvider.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    return StorageProvider;
}());
StorageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], StorageProvider);

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addaddress/addaddress.module": [
		285,
		12
	],
	"../pages/address/address.module": [
		286,
		11
	],
	"../pages/editaddress/editaddress.module": [
		287,
		10
	],
	"../pages/login/login.module": [
		289,
		9
	],
	"../pages/order/order.module": [
		288,
		8
	],
	"../pages/pcontent/pcontent.module": [
		290,
		7
	],
	"../pages/personal/personal.module": [
		297,
		6
	],
	"../pages/productlist/productlist.module": [
		291,
		5
	],
	"../pages/register/register.module": [
		294,
		4
	],
	"../pages/registerpassword/registerpassword.module": [
		292,
		3
	],
	"../pages/registersign/registersign.module": [
		293,
		2
	],
	"../pages/search/search.module": [
		296,
		1
	],
	"../pages/user/user.module": [
		295,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_category__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__category_category__["a" /* CategoryPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\tabs\tabs.html"*/'<ion-tabs class="mytabs">\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="分类" tabIcon="ios-apps"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="购物车" tabIcon="ios-cart"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pcontent_pcontent__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//搜索页面

//商品详情

var HomePage = (function () {
    function HomePage(navCtrl, config, jsonp, httpService) {
        // console.log(this.config.apiUrl);
        this.navCtrl = navCtrl;
        this.config = config;
        this.jsonp = jsonp;
        this.httpService = httpService;
        this.PcontentPage = __WEBPACK_IMPORTED_MODULE_6__pcontent_pcontent__["a" /* PcontentPage */];
        this.focusList = []; /*数组 轮播图*/
        this.focusListTest = []; /*数组 轮播图*/
        this.bestList = []; /*精品推荐*/
        this.bestListWidth = ''; /*精品推荐数据长度*/
        this.hotList = []; /*热门商品 精品推荐*/
        // this.config.run();
        //调用轮播图
        this.getFocus();
        //调用精品推荐
        this.getBestProduct();
        //调用猜你喜欢
        this.getHotProduct();
    }
    //定义一个跳转到搜索页面的方法
    HomePage.prototype.goSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    //轮播图
    HomePage.prototype.getFocus = function () {
        var that = this;
        this.httpService.requestData('api/focus', function (data) {
            console.log(data);
            that.focusList = data.result;
            that.focusListTest = data.result[0];
        });
    };
    //精品推荐
    HomePage.prototype.getBestProduct = function () {
        // http://39.108.159.135/api/plist?is_best=1
        var _this = this;
        this.httpService.requestData('api/plist?is_best=1', function (data) {
            console.log(data);
            _this.bestList = data.result;
            _this.bestListWidth = _this.bestList.length * 92 + 'px';
        });
    };
    //猜你喜欢
    HomePage.prototype.getHotProduct = function () {
        var _this = this;
        //http://39.108.159.135/api/plist?is_hot=1  
        this.httpService.requestData('api/plist?is_hot=1', function (data) {
            // console.log(data);
            _this.hotList = data.result;
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-searchbar (tap)="goSearch()"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n   <ion-slides *ngIf="focusList.length>0" class="focus" pager  loop="true" autoplay="3000">    \n      <ion-slide *ngFor="let item of focusList">\n          <img [src]="config.apiUrl+item.pic" />\n      </ion-slide>         \n   </ion-slides>\n\n   <div class="home_nav">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-2.4><ion-icon name="ios-construct"></ion-icon><div><font size=2>大项招标</font></div></ion-col>\n        <ion-col col-2.4><ion-icon name="ios-create"></ion-icon><div><font size=2>审　批</font></div></ion-col>\n        <ion-col col-2.4><ion-icon name="ios-archive"></ion-icon><div><font size=2>大项采购</font></div></ion-col>\n        <ion-col col-2.4><ion-icon name="ios-camera"></ion-icon><div><font size=2>源头监督</font></div></ion-col>\n        <ion-col col-2.4><ion-icon name="ios-bicycle"></ion-icon><div><font size=2>物流监督</font></div></ion-col>\n      </ion-row>\n    </ion-grid>\n   </div>\n\n   <div class="home_brand">\n    品牌街\n   </div>\n\n   <div class="hot_shop clearfix">   \n      <ion-grid>   \n        <ion-row>\n          <ion-col col-3 *ngFor="let item of hotList" [navPush]="PcontentPage" [navParams]="{\'id\':item[\'_id\']}">                                   \n            <img class="brand" [src]="config.apiUrl+item.s_pic" />\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n   </div>\n\n    <div class="home_title">\n      \n      每日特辑\n    </div>\n    <div class="testimg">\n      <img src="../../assets/imgs/test.png" />\n    </div>\n\n    <div class="hot_shop clearfix">      \n      <ion-row>\n         <ion-col col-4 *ngFor="let item of hotList" [navPush]="PcontentPage" [navParams]="{\'id\':item[\'_id\']}">                                   \n\n                 <img class="special" [src]="config.apiUrl+item.s_pic" />\n                 <div class="hot_shop_detail">{{item.title}}</div>\n                 <p><span class="price">¥{{item.price}}</span> <span class="old_price">¥{{item.old_price}}</span></p>\n         </ion-col>\n      </ion-row>\n\n\n    </div>\n\n    <div class="home_title">\n      精品推荐\n    </div>\n    <div class="rec_shop">\n\n\n      <!--外层的ion-scroll 100%   里面元素的宽度要大于100%-->\n        <ion-scroll scrollX="true">  \n\n            <ul class="plist clearfix" [ngStyle]="{\'width\':bestListWidth}">\n                <li *ngFor="let item of bestList" [navPush]="PcontentPage" [navParams]="{\'id\':item[\'_id\']}">     \n               \n                  <img [src]="config.apiUrl+item.s_pic" />\n                  <div class="rec_shop_detial">{{item.title}}</div>\n                  <p><span class="price">¥{{item.price}}</span><p>\n\n                </li>\n              </ul>\n        </ion-scroll>\n\n       \n\n      \n    </div>\n\n    <div class="home_title">\n      \n           猜你喜欢\n    </div>\n\n    <div class="hot_shop clearfix">      \n          <ion-row>\n              <ion-col col-6 *ngFor="let item of hotList" [navPush]="PcontentPage" [navParams]="{\'id\':item[\'_id\']}">                                   \n\n                      <img [src]="config.apiUrl+item.s_pic" />\n                      <div class="hot_shop_detail">{{item.title}}</div>\n                      <p><span class="price">¥{{item.price}}</span> <span class="old_price">¥{{item.old_price}}</span></p>\n              </ion-col>\n          </ion-row>\n\n\n    </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Jsonp */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productlist_productlist__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_config_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//商品列表



var CategoryPage = (function () {
    function CategoryPage(navCtrl, config, httpService) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.httpService = httpService;
        this.ProductlistPage = __WEBPACK_IMPORTED_MODULE_2__productlist_productlist__["a" /* ProductlistPage */]; /*商品列表页面*/
        this.leftCate = []; /*左侧分类数据*/
        this.rightCate = []; /*右侧分类数据*/
        this.getLeftCateData(); /*左侧分类*/
    }
    //左侧分类的方法
    CategoryPage.prototype.getLeftCateData = function () {
        var _this = this;
        var api = 'api/pcate';
        this.httpService.requestData(api, function (data) {
            console.log(data);
            _this.leftCate = data.result;
            //调用右侧分类
            _this.getRightCateData(_this.leftCate[0]['_id']);
        });
    };
    CategoryPage.prototype.getRightCateData = function (pid) {
        var _this = this;
        var api = 'api/pcate?pid=' + pid;
        this.httpService.requestData(api, function (data) {
            console.log(data);
            _this.rightCate = data.result;
        });
    };
    return CategoryPage;
}());
CategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-category',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\category\category.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-searchbar></ion-searchbar>\n    \n       \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="cate_content">\n      <div class="cate_left">\n          <ion-list>\n            <ion-item *ngFor="let item of leftCate" (tap)="getRightCateData(item[\'_id\'])">\n              {{item.title}}\n            </ion-item>\n          </ion-list>\n      </div>\n\n      <div class="cate_right">\n          <ion-row>\n              <ion-col col-4 *ngFor="let item of rightCate" [navPush]=\'ProductlistPage\' [navParams]="{\'cid\':item[\'_id\']}">              \n                \n                    <img [src]="config.apiUrl+item.pic" />\n                    <p>{{item.title}}</p>                           \n              </ion-col>\n          </ion-row>\n\n      </div>\n\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\category\category.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_http_services_http_services__["a" /* HttpServicesProvider */]])
], CategoryPage);

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http } from '@angular/http';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ConfigProvider = (function () {
    //地址失效请访问 API 接口实时更新地址：https://www.itying.com/article-11.html
    function ConfigProvider() {
        //api请求地址
        this.apiUrl = "http://39.108.159.135/";
        console.log('Hello ConfigProvider Provider');
    }
    return ConfigProvider;
}());
ConfigProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConfigProvider);

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_category_category__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_registersign_registersign__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_registerpassword_registerpassword__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_productlist_productlist__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pcontent_pcontent__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_personal_personal__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_order_order__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_address_address__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_addaddress_addaddress__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_editaddress_editaddress__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_config_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_http_services_http_services__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_tools_tools__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//登录

//注册



//搜索页面

//商品列表

//商品详情

//账户管理

//订单页面

//收货地址列表

//增加收货地址

//修改收货地址








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_registersign_registersign__["a" /* RegistersignPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_registerpassword_registerpassword__["a" /* RegisterpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_pcontent_pcontent__["a" /* PcontentPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_personal_personal__["a" /* PersonalPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_address_address__["a" /* AddressPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_addaddress_addaddress__["a" /* AddaddressPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_editaddress_editaddress__["a" /* EditaddressPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* JsonpModule */],
            // IonicModule.forRoot(MyApp)
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: 'true',
                backButtonText: '' /*配置返回按钮*/
            }, {
                links: [
                    { loadChildren: '../pages/addaddress/addaddress.module#AddaddressPageModule', name: 'AddaddressPage', segment: 'addaddress', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editaddress/editaddress.module#EditaddressPageModule', name: 'EditaddressPage', segment: 'editaddress', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pcontent/pcontent.module#PcontentPageModule', name: 'PcontentPage', segment: 'pcontent', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/productlist/productlist.module#ProductlistPageModule', name: 'ProductlistPage', segment: 'productlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registerpassword/registerpassword.module#RegisterpasswordPageModule', name: 'RegisterpasswordPage', segment: 'registerpassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/registersign/registersign.module#RegistersignPageModule', name: 'RegistersignPage', segment: 'registersign', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal/personal.module#PersonalPageModule', name: 'PersonalPage', segment: 'personal', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_cart_cart__["a" /* CartPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_registersign_registersign__["a" /* RegistersignPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_registerpassword_registerpassword__["a" /* RegisterpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_productlist_productlist__["a" /* ProductlistPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_pcontent_pcontent__["a" /* PcontentPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_personal_personal__["a" /* PersonalPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_address_address__["a" /* AddressPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_addaddress_addaddress__["a" /* AddaddressPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_editaddress_editaddress__["a" /* EditaddressPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_24__providers_config_config__["a" /* ConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_http_services_http_services__["a" /* HttpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_tools_tools__["a" /* ToolsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//配置文件

//npm install ts-md5 --save

/*
  Generated class for the ToolsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToolsProvider = (function () {
    function ToolsProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello ToolsProvider Provider');
    }
    //获取用户信息
    ToolsProvider.prototype.getUserInfo = function () {
        var userinfo = this.storage.get('userinfo');
        if (userinfo) {
            return userinfo;
        }
        else {
            return '';
        }
    };
    ToolsProvider.prototype.sign = function (json) {
        //
        // console.log(Md5.hashStr("123456"));
        // json={
        //   age:20,name:'zhangsan'
        // }
        var tempArr = [];
        for (var attr in json) {
            tempArr.push(attr);
        }
        //排序
        tempArr = tempArr.sort();
        var tempStr = '';
        for (var i = 0; i < tempArr.length; i++) {
            tempStr += tempArr[i] + json[tempArr[i]];
        }
        return __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(tempStr);
    };
    return ToolsProvider;
}());
ToolsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]])
], ToolsProvider);

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, httpService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.storage = storage;
        //定义数据
        this.history = '';
        this.userinfo = {
            username: '',
            password: ''
        };
        this.history = this.navParams.get('history');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.doLogin = function () {
        //1.this.userinfo 表单信息
        var _this = this;
        //2.请求接口 完成登录功能
        // console.log(this.userinfo);   //{username: "3214324", password: "324"}
        if (this.userinfo.username.length < 6) {
            alert('用户名不合法');
        }
        else {
            var api = 'api/doLogin';
            this.httpService.doPost(api, this.userinfo, function (data) {
                // console.log(data);
                if (data.success) {
                    _this.storage.set('userinfo', data.userinfo[0]);
                    if (_this.history == 'order') {
                        _this.navCtrl.pop(); /*返回上一个页面*/
                    }
                    else {
                        _this.navCtrl.popToRoot(); /*回到根页面*/
                    }
                }
                else {
                    alert(data.message);
                }
            });
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>登录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n   <ion-list>\n        <ion-item>\n          <ion-label fixed>账户:</ion-label>\n          <ion-input type="text" [(ngModel)]=\'userinfo.username\' placeholder=\'手机号/账户\'></ion-input>\n        </ion-item>\n  \n        <ion-item>\n            <ion-label fixed>密码:</ion-label>\n            <ion-input type="password"  [(ngModel)]=\'userinfo.password\' placeholder=\'请输入密码\'></ion-input>\n         </ion-item>\n\n         <ion-item no-lines class="list_end">\n            <span item-start>\n                手机快速注册\n            </span>\n            <span item-end>\n                忘记密码\n            </span>\n         </ion-item>\n   </ion-list>\n\n   <button ion-button block color="danger" class="login_btn" (tap)="doLogin()">登录</button>\n    \n\n</ion-content>\n'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_http_services_http_services__["a" /* HttpServicesProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_storage_storage__["a" /* StorageProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_config__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_order__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartPage = (function () {
    function CartPage(navCtrl, config, storage) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.storage = storage;
        this.list = [];
        this.allPrice = 0; /*总价*/
        this.isChencked = false; /*全选反选*/
        this.isEdit = false; /*是否编辑*/
        this.hasData = true; /*是否有数据*/
    }
    CartPage.prototype.ionViewDidEnter = function () {
        this.getCartsData();
        console.log(this.getChenckNum(), this.list.length);
        //进来的时候判断有没有全选
        if (this.getChenckNum() == this.list.length && this.list.length > 0) {
            this.isChencked = true;
        }
        else {
            this.isChencked = false;
        }
    };
    CartPage.prototype.getCartsData = function () {
        var cartsData = this.storage.get('carts_data');
        console.log(cartsData);
        if (cartsData && cartsData.length > 0) {
            this.list = cartsData;
            this.hasData = true;
        }
        else {
            this.list = [];
            this.hasData = false;
        }
        this.sumPrice();
    };
    CartPage.prototype.changeCarts = function () {
        // console.log(this.list);
        if (this.getChenckNum() == this.list.length) {
            this.isChencked = true;
        }
        else {
            this.isChencked = false;
        }
        this.sumPrice();
    };
    /*计算总价*/
    CartPage.prototype.sumPrice = function () {
        var tempAllPrice = 0;
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].checked == true) {
                tempAllPrice += this.list[i].product_count * this.list[i].product_price;
            }
        }
        this.allPrice = tempAllPrice;
    };
    //数量变化  双向数据绑定
    CartPage.prototype.decCount = function (item) {
        // console.log(item);
        if (item.product_count > 1) {
            --item.product_count;
        }
        this.sumPrice();
    };
    CartPage.prototype.incCount = function (item) {
        ++item.product_count;
        this.sumPrice();
    };
    //离开的时候保存购物车数据
    CartPage.prototype.ionViewWillLeave = function () {
        this.storage.set('carts_data', this.list);
    };
    //全选反选
    //ionChange  事件只要checkbox改变就会触发
    CartPage.prototype.checkAll = function () {
        console.log(this.isChencked);
        if (this.isChencked) {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].checked = false;
            }
            this.isChencked = false;
        }
        else {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].checked = true;
            }
            this.isChencked = true;
        }
    };
    //获取选中的数量
    CartPage.prototype.getChenckNum = function () {
        var sum = 0;
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].checked == true) {
                sum += 1;
            }
        }
        return sum;
    };
    //执行删除操作
    CartPage.prototype.doDelete = function () {
        var noCheckedArr = [];
        for (var i = 0; i < this.list.length; i++) {
            if (!this.list[i].checked) {
                noCheckedArr.push(this.list[i]);
            }
        }
        //改变当前数据
        this.list = noCheckedArr;
        this.list.length > 0 ? this.hasData = true : this.hasData = false;
        //重新写入localstorage
        this.storage.set('carts_data', noCheckedArr);
    };
    //去结算  去订单页面
    CartPage.prototype.doPay = function () {
        //获取购物车选中的数据
        var tempArr = [];
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].checked) {
                tempArr.push(this.list[i]);
            }
        }
        //选中的数据
        // console.log(tempArr);
        //保存订单数据
        if (tempArr.length > 0) {
            this.storage.set('order_data', tempArr);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__order_order__["a" /* OrderPage */]);
        }
        else {
            alert('您还没有选中数据');
        }
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"E:\ionic\MyProject\JDShopping\src\pages\cart\cart.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      购物车\n    </ion-title>\n\n  <ion-buttons end>\n    <button ion-button (tap)="isEdit=!isEdit">\n      <span *ngIf="!isEdit">编辑</span>\n      <span *ngIf="isEdit">完成</span>\n    </button>\n  </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n    <div class="cart_spinner" *ngIf="list.length==0 && hasData">\n      <ion-spinner></ion-spinner>\n    </div>  \n    \n    <p style="text-align:center; padding-top:80px;" *ngIf="!hasData">您购入车没有数据!</p>\n    \n\n    <dl class="cart_list" *ngFor="let item of list;">\n      \n            <dt>\n              <ion-checkbox color="danger" [(ngModel)]="item.checked" (ionChange)="changeCarts()"></ion-checkbox>\n             \n              <img [src]="config.apiUrl+item.product_pic" />\n      \n            </dt>      \n            <dd>\n                <h2 class="cart_title">{{item.product_title}}</h2>\n                <div class="cart_info">\n                    <div class="cart_price">\n                        ¥{{item.product_price}}元\n                    </div>      \n                    <div class="cart_num">\n                      <div class="input_left" (tap)="decCount(item)">-</div>\n                      <div class="input_center">\n                          <input type="text"  readonly="readonly" [(ngModel)]="item.product_count" name="num" id="num" />\n                      </div>\n                      <div class="input_right" (tap)="incCount(item)">+</div>\n      \n                    </div>\n      \n                </div>\n            </dd>\n          </dl>\n</ion-content>\n\n\n<ion-footer *ngIf="hasData">\n  <ion-toolbar *ngIf="!isEdit">\n    <div class="all_price"  (tap)="checkAll()">\n      \n      <ion-checkbox disabled="true" color="danger" [(ngModel)]=\'isChencked\'></ion-checkbox>\n      全选  　<strong>合计:¥{{allPrice}}元</strong>\n    </div>\n    <ion-buttons end>\n      <div color="danger" (tap)="doPay()" class="dopay">\n        去结算\n      </div>\n\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar *ngIf="isEdit">\n    <div class="all_price"  (tap)="checkAll()">\n      \n      <ion-checkbox disabled="true" color="danger" [(ngModel)]=\'isChencked\'></ion-checkbox>\n      全选  　\n    </div>\n    <ion-buttons end>\n      <div color="danger" (tap)="doDelete()" class="dodelete">\n        删除\n      </div>\n\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"E:\ionic\MyProject\JDShopping\src\pages\cart\cart.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_config_config__["a" /* ConfigProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_storage_storage__["a" /* StorageProvider */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map