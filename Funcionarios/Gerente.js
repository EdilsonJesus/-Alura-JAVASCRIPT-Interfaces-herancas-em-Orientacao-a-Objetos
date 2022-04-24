import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    constructor(nome, salario, cpf){
        super(nome, salario, cpf)

        this._bonicacao = 1.1;
    }
}