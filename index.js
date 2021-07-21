
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Jair";
cliente1.cpf = 1234;

const cliente2 = new Cliente();
cliente2.nome = "Lidiane";
cliente2.cpf = 4568;

const contaCorrenteCliente1 = new ContaCorrente();

/*Trava a edição do atributo*/
//contaCorrenteCliente1.#saldo = 10000;

/*Cuidado: permite edição não atribuir com possuir o '_'*/
//_saldo = 1000; 

/*Cuidado o js cria atributos caso eles não existam */
//contaCorrenteCliente1.quaquerCoisa = 10000;
                                            
contaCorrenteCliente1.agencia = 1001;
contaCorrenteCliente1.Depositar(1000);
const valorSacado = contaCorrenteCliente1.Sacar(10);


console.log(cliente1, contaCorrenteCliente1);
console.log(valorSacado);
