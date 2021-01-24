import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { CarteiraService } from '../carteira.service';
import { InvestimentosComponent } from '../investimentos/investimentos.component';

@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.css']
})
export class ResgateComponent implements OnInit {

  @ViewChild('tabela', {static: true}) grid: Table;


  investimentos = new InvestimentosDto() ;

  acoes : any;

  nomeInvestimento : string;
  valorResgate : number;
  valorTotalResgate : number = 0;
  valid: boolean;
  msgs = [];



  constructor(private carteiraService : CarteiraService) { }

  ngOnInit(): void {
    this.getInvestimentos();
  }

  displayModal: boolean;

  showModalDialog() {
    if(this.valorTotalResgate == 0 || this.valorTotalResgate == null) {
      this.msgs = [
        {severity:'warn', summary:'Opa!', detail:'Valor de resgate igual a 0, favor preencher os campos de retirda!'}  ];
    }else{
      this.displayModal = true;
    }
}


  getInvestimentos(){
    this.investimentos = this.carteiraService.getInvestimentos();
    this.acoes = this.investimentos.acoes;

  }

  validateValue(event : any, perc : number ){

    const sldAcum = perc / 100 * this.investimentos.saldoTotalDisponivel;

    if( sldAcum < +event.target.value){
      this.valid = false;
      this.msgs = [
        {severity:'warn', summary:'Opa!', detail:'Valor de resgate maior que o saldo acunulado!'}  ];
      } else if(sldAcum > +event.target.value){
        this.msgs = [];
      }

  }

  carregarValorTotalResgate(event : any ){

    this.valorTotalResgate = +event.target.value + this.valorTotalResgate;
  }



}

export class InvestimentosDto{
 nome : string;
 objetivo: string;
 saldoTotalDisponivel: number;
 indicadorCarencia : string
 acoes = new Acoes();
}

export class Acoes{
 id : string;
 nome: string;
 percentual : number;
 resgate : number;
}
