import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarteiraModule } from './carteira/carteira.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { InvestimentosComponent } from './carteira/investimentos/investimentos.component';
import { ResgateComponent } from './carteira/resgate/resgate.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

const routes: Routes = [
  { path: 'investimentos', component: InvestimentosComponent },
  { path: '', redirectTo: 'investimentos', pathMatch: 'full'},
  { path: 'resgate', component: ResgateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MessagesModule,
    MessageModule,
    BrowserModule,
    CarteiraModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
