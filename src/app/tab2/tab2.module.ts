import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Tab2Page} from './tab2.page';
import {SubjectModule} from '../tab1/subject/subject.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    SubjectModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
