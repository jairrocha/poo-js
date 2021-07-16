class Cliente{

    nome;
    cpf;
    agencia;
    saldo;

}


const cliente1 = new Cliente();
cliente1.nome = "Jair";
cliente1.cpf = 1234;
cliente1.agencia = 22;
cliente1.saldo = 100;

const cliente2 = new Cliente();
cliente2.nome = "Lidiane";
cliente2.cpf = 4568;
cliente2.agencia = 100;
cliente2.saldo = 1000;

console.log(cliente1, cliente2);
