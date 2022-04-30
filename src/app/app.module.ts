import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxScrollPositionRestorationModule } from 'ngx-scroll-position-restoration';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DemoComponent } from './pages/demo/demo.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PerformersModule } from './modules/performers/performers.module';
import { MaterialSymbolsComponent } from './components/material-symbols/material-symbols.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DemoComponent,
    DashboardComponent,
    MaterialSymbolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    NgxScrollPositionRestorationModule.forRoot(),
    PerformersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
