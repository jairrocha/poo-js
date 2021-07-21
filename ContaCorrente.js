
export class ContaCorrente{
    agencia;

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

    Sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }

       
    }

    Depositar(valor){
        if (valor > 0 ) return;

        this._saldo+=valor;
    }
}