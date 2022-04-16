console.log("Bem Vindo ao BytBank \n\n\n");

import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";



const cliente1 = new Cliente();
cliente1.nome = "Pedro";
cliente1.cpf  = 12345678900;


const cliente2 = new Cliente();
cliente2.nome = "Ana";
cliente2.cpf = 98765432100;

const contaCorrentePedro = new ContaCorrente ();
contaCorrentePedro._saldo = 0;
contaCorrentePedro.agencia = 1001;
contaCorrentePedro.cliente = cliente1;
console.log(cliente1);



// TEMOS UMA OPERAÇÃO QUE NÃO ESTÁ PROTEGENDO A REGRA DE NEGOCIO DO BANCO
// console.log(contaCorrentePedro.saldo);
// contaCorrentePedro.saldo = 100;
// console.log(contaCorrentePedro.saldo);
// let valorSacado = 200;
// contaCorrentePedro.saldo -= valorSacado; 

// console.log(contaCorrentePedro.saldo);

// VAMOS USAR A MESMA ESTRUTURA, POREM MODIFICANDO E ACRESCENTANDO UMA VERIFICAÇÃO 
// console.log(contaCorrentePedro.saldo);
// contaCorrentePedro.saldo = 100;
// console.log(contaCorrentePedro.saldo);
// let valorSacado = 200;
// if (contaCorrentePedro.saldo >= valorSacado){
//     contaCorrentePedro.saldo -= valor;
//     };
// Agora vamos costumizar e colocar em uma função    

console.log(contaCorrentePedro._saldo);
contaCorrentePedro._saldo = 100; 
console.log(contaCorrentePedro._saldo); 
contaCorrentePedro.sacar(200);

const valorSacado =  contaCorrentePedro.sacar;

console.log(contaCorrentePedro._saldo);
console.log(valorSacado);


console.log(cliente1);
console.log(cliente2);