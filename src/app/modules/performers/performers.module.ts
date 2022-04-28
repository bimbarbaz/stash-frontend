import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformersRoutingModule } from './performers-routing.module';
import { ListComponent } from './pages/list/list.component';
import { PerformerComponent } from './components/performer.component';


@NgModule({
  declarations: [
    ListComponent,
    PerformerComponent
  ],
  imports: [
    CommonModule,
    PerformersRoutingModule,
  ],
  exports: [
    PerformerComponent
  ]
})
export class PerformersModule { }
