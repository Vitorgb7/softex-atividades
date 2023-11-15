// Solicita ao usuário para informar dois números e a operação desejada
let numero1 = Number(prompt("Informe o primeiro número:"));
let numero2 = Number(prompt("Informe o segundo número:"));
let operacao = prompt("Informe a operação desejada (+, -, *, /):");

if (isNaN(numero1) || isNaN(numero2)) {
  console.log("Por favor, insira valores numéricos válidos.");
} else {

  let resultado;

  switch (operacao) {
    case '+':
      resultado = numero1 + numero2;
      break;
    case '-':
      resultado = numero1 - numero2;
      break;
    case '*':
      resultado = numero1 * numero2;
      break;
    case '/':
      if (numero2 === 0) {
        console.log("Erro: divisão por zero!");
      } else {
        resultado = Math.floor(numero1 / numero2); 
        let sobra = numero1 % numero2; 
        console.log("Resultado da divisão: " + resultado);
        console.log("Resto da divisão: " + sobra);
      }
      break;
    default:
      console.log("Operação inválida. Use os operadores +, -, *, /");
  }

  if (operacao !== '/') {
    console.log("Resultado da operação: " + resultado);
  }
}