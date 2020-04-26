import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubjectComponent} from './subject/subject.component';
import {Tab1Page} from './tab1.page';

const routes: Routes = [
  {
    path: 'subjects/:id',
    component: SubjectComponent,
  },
  {
    path: '',
    component: Tab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1RoutingModule {}
