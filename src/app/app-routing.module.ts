import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationLayoutComponent } from './layouts/application-layout/application-layout.component';
import { PerformersModule } from './modules/performers/performers.module';
import { ScenesModule } from './modules/scenes/scenes.module';
import { StudiosModule } from './modules/studios/studios.module';
import { TagsModule } from './modules/tags/tags.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DemoComponent } from './pages/demo/demo.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: ApplicationLayoutComponent, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'performers', loadChildren: () => PerformersModule },
    { path: 'scenes', loadChildren: () => ScenesModule },
    { path: 'studios', loadChildren: () => StudiosModule },
    { path: 'tags', loadChildren: () => TagsModule },
  ] },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
