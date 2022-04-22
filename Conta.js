export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta){
            console.log("Você não deveria instaciar um Objeto do tipo Conta!!!")
        }
    }

    sacar(valor){
        let taxa = 1;
        return this._sacar(valor,taxa);
   }
    

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valorSacado;
        }
        return 0;    
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