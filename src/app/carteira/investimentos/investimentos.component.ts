import { InvestimentosDto } from './../resgate/resgate.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { CarteiraService } from '../carteira.service';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {
  @ViewChild('tabela', {static: true}) grid: Table;



  investimentos = [];

  teste = [];


  ngOnInit(): void {
    this.list();
  }

  constructor( private carteiraService: CarteiraService ){}

  list(){
    this.carteiraService.list()
    .then(response => {
      this.investimentos = response.response.data.listaInvestimentos;
    });
  }

  onClick(investimento: InvestimentosDto){
    this.carteiraService.putInvestimentos(investimento);
  }

}
