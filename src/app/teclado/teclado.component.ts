import { Component, OnInit } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { ValidacaoService } from '../validacao.service';


@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent implements OnInit {

  public resultado:string = '';

  constructor(private validacao:ValidacaoService) { 
    setTheme('bs4');
  }

  ngOnInit(): void {
  }

  public preencher(caractere:string){
    if(this.validacao.ehValidaExpressao(caractere, this.resultado)){
      this.resultado += caractere;
    }
  }

  
  public limpar(){
    this.resultado="";
  }

  public avaliar(){
    this.resultado = eval(this.resultado)+"";
  }
}

