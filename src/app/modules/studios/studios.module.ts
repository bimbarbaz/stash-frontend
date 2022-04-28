import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudiosRoutingModule } from './studios-routing.module';
import { ListComponent } from './pages/list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    StudiosRoutingModule
  ]
})
export class StudiosModule { }
