import { Cliente } from "./Cliente.js";

export class ContaCorrente{

    static numeroDeContas = 0;
    agencia;
    _cliente;


    /*O '#' Deixa o campo privado, não funciona em todas a 
    ferramentas (Não formalizado pela comunidade 
    (Não recomendável colocar em produção)) 
    Link da proposta em andamento: https://github.com/tc39/proposal-class-fields#private-fields
    */
    
    //#saldo; 

    /*por convenção qndo temos '_' é um indicativo que o 
    campo é privado (usado hj pela 
    comunidade (recomendável colocar em produção dessa maneira))*/    
    
    _saldo = 0; /*é obrigratório inicializar campos númericos*/


    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas++;
    }

    Sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }

       
    }

    Depositar(valor){
        if (valor < 0 ) return;

        this._saldo+=valor;
    }

    Transferir(valor, conta){
        const valorSacado = this.Sacar(valor);
        conta.Depositar(valorSacado);
    }

    
    set cliente(novoValor){
        if (novoValor instanceof Cliente) {
            
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
}