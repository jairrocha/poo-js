
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Jair", 1234)

const cliente2 = new Cliente("Lidiane", 4568 );

const conta2 = new ContaCorrente(cliente2, 1002);
conta2.Depositar(100);
const valorSacado = conta2.Sacar(10);

const conta1 = new ContaCorrente(cliente1, 1001);
// conta1.cliente = 0;
conta1.Depositar(1000);
conta1.Transferir(500, conta2);


console.log(conta1);
console.log(conta2);
