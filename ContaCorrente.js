import { Cliente } from "./Cliente.js";

export  class ContaCorrente {
    static numeroConta = 0; 
    agencia;
    _cliente;
     //#saldo = 0     
    //Atriibuto privado
    _saldo = 0;


    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }    
    }
    
    get cliente(){
        return this._cliente
    }

   

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia; 
        ContaCorrente.numeroConta += 1;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }

        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}