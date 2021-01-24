import { InvestimentosDto } from './resgate/resgate.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as EventEmitter from 'events';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  urlInvestimentos = "http://www.mocky.io/v2/5e76797e2f0000f057986099";
  private investimentos = new InvestimentosDto() ;

  emmitNameChange = new EventEmitter();

  constructor(
    private http: HttpClient
  ) { }

  list(): Promise<any>{
    return this.http.get(this.urlInvestimentos)
    .toPromise()
    .then(response =>  response);
  }

  getInvestimentos(): InvestimentosDto{
    return this.investimentos;
  }

  putInvestimentos(investimento: InvestimentosDto) : void{
    this.investimentos = investimento;
  //  this.emmitNameChange.emit(investimento);
  }


}
