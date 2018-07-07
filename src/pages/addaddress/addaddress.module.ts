import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddaddressPage } from './addaddress';

@NgModule({
  declarations: [
    AddaddressPage,
  ],
  imports: [
    IonicPageModule.forChild(AddaddressPage),
  ],
})
export class AddaddressPageModule {}
