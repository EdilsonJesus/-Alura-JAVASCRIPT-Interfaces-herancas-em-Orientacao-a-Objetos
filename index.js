console.log("Bem vindo Ao BytBank \n\n");

import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo",11122243456);
const cliente2 = new Cliente("Alice", 990088776612);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

const contaPoupanca = new ContaPoupanca(500, cliente1, 1001)

console.log(contaCorrenteRicardo);

