import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { CarteiraService } from '../carteira.service';


@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.css']
})
export class ResgateComponent implements OnInit {

  @ViewChild('tabela', {static: true}) grid: Table;


  investimentos = new InvestimentosDto() ;

  acoes = new Acoes();
  acao = [{'id' : 0,  'valor' : '0'}];
  acoesPorId = [];


  valorTotalResgate : number = 0;
  valid: boolean = true;
  msgs = [];



  constructor(private carteiraService : CarteiraService) { }

  ngOnInit(): void {
    this.getInvestimentos();
  }

  displayModal: boolean;

  showModalDialog() {
    if(this.valorTotalResgate == 0 || this.valorTotalResgate == null || this.valid == false) {
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

    let valor : number = this.formatarValorMascara(event.target.value);

 /*   let valor2 = valor.substr(2);

    if((valor2.substr(valor2.length - 2, 2))== '00'){
      valor2 = valor2.replace(',', '.');
      console.log(valor2);
    }else {
      valor2 = valor2.replace(',', '.');
      console.log(valor2);
    }

    if(valor2.length <= 7){
      valor = valor2.replace(',', '.');
    }else{
      let casaDecimal = valor2.substr(valor2.length - 3, 3);
      let valorTruncado = valor2.substr(0, valor2.length - 3);
      let re = /\./gi;
      valorTruncado = valorTruncado.replace(re, "");
      valor = valorTruncado + casaDecimal;
    } */

    if( sldAcum < +valor){
      this.valid = false;
      this.msgs = [
        {severity:'warn', summary:'Opa!', detail:'Valor de resgate maior que o saldo acunulado!'}  ];
      } else if(sldAcum > +valor){
        this.valid = true;
        this.msgs = [];
      }

  }

  carregarValorTotalResgate(event : any, idAcao : number ){

   if (this.valid){
      this.valorTotalResgate = this.formatarValorMascara(event.target.value) + this.valorTotalResgate;
    }
  }


  formatarValorMascara(event : any) : number{

    let valor : string = event;

    let valor2 = valor.substr(2);

    if((valor2.substr(valor2.length - 2, 2))== '00'){
      valor2 = valor2.replace(',', '.');
      console.log(valor2);
    }else {
      valor2 = valor2.replace(',', '.');
      console.log(valor2);
    }

    if(valor2.length <= 7){
      valor = valor2.replace(',', '.');
    }else{
      let casaDecimal = valor2.substr(valor2.length - 3, 3);
      let valorTruncado = valor2.substr(0, valor2.length - 3);
      let re = /\./gi;
      valorTruncado = valorTruncado.replace(re, "");
      valor = valorTruncado + casaDecimal;
    }

    return +valor;
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
