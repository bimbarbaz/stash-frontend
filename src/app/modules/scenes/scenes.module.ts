import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenesRoutingModule } from './scenes-routing.module';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { PerformersModule } from '../performers/performers.module';
import { SceneComponent } from './components/scene/scene.component';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    SceneComponent
  ],
  imports: [
    CommonModule,
    ScenesRoutingModule,
    FormsModule,
    PerformersModule
  ]
})
export class ScenesModule { }
