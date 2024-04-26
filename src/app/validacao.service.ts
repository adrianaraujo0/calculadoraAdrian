import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {
  public turma = "ADS0304N"
  public turno = "noite"
  public unidade = "Bonsucesso"
  public foto = "assets/img/pedro.jpg"
  public aluno = "Pedro Henrique Do Nascimento Nunes"

  constructor() { }

  private ehOperador(caractere:string):boolean {
    if(caractere=='+' || caractere=='/' || caractere=='*' || caractere=='-'){
      return true;
    } else {
      return false;
    }
  }

  private ehZero(caractere:string):boolean {
    if(caractere=='0'){
      return true;
    } else {
      return false;
    }
  }

  private ehZeroDepoisDeOperador(caractere:string, expressao:string):boolean {
    let exp = expressao.charAt(expressao.length-1);
    if(this.ehOperador(exp) && this.ehZero(caractere)){
      return true;
    } else {
      return false;
    }
  }


  private ehOperadorDepoisDeOperador(caractere:string, expressao:string):boolean {
    let exp = expressao.charAt(expressao.length-1);
    if(this.ehOperador(exp) && this.ehOperador(caractere)){
      return true;
    } else {
      return false;
    }
  }

  public ehValidaExpressao(caractere:string, expressao:string):boolean {
    if(expressao.length==0 && this.ehZero(caractere)){
      return false;
    } 
    
    else if(expressao.length==0 && this.ehOperador(caractere)){
      return false;
    }

    else if(this.ehZeroDepoisDeOperador(caractere, expressao)){
      return false;
    }

    else if(this.ehOperadorDepoisDeOperador(caractere, expressao)){
      return false;
    }

    else {
      return true;
    }

  }


}
