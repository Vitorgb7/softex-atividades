class Banco {
    constructor(saldoInicial, numeroConta, tipoDeConta, agencia) {
      this.saldo = saldoInicial || 0;
      this.conta = numeroConta || "123456";
      this.tipoDeConta = tipoDeConta || "Corrente";
      this.agencia = agencia || "7890";
    }
  
    buscarSaldo() {
      return this.saldo;
    }
  
    deposito(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }
  
    saque(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`);
      } else {
        console.log("Valor de saque inválido ou saldo insuficiente.");
      }
    }
  
    numeroDaConta() {
      return this.conta;
    }
  }
  
  const minhaConta = new Banco(1000, "654321", "Poupança", "9876");
  
  console.log("Saldo atual:", minhaConta.buscarSaldo());
  console.log("Número da conta:", minhaConta.numeroDaConta());
  
  minhaConta.deposito(500);
  minhaConta.saque(200);
  