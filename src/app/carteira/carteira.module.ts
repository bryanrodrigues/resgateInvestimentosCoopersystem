import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

import {CardModule} from 'primeng/card';
import {SplitterModule} from 'primeng/splitter';
import {InputNumberModule} from 'primeng/inputnumber';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvestimentosComponent } from './investimentos/investimentos.component';
import { ResgateComponent } from './resgate/resgate.component';
import { RouterModule } from '@angular/router';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    InvestimentosComponent,
    ResgateComponent,
  ],
  imports: [
    MessagesModule,
    MessageModule,
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    InputTextModule,
    TooltipModule,
    ButtonModule,
    CardModule,
    SplitterModule,
    InputNumberModule,
    DialogModule,
    RouterModule
  ],
  exports: [ InvestimentosComponent,    ResgateComponent]
})
export class CarteiraModule { }
