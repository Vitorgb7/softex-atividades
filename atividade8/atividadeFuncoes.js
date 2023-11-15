function calcularSoma() {
    let numero1 = 5;
    let numero2 = 3;
    let resultado = numero1 + numero2;
    console.log("A soma é: " + resultado);
  }
  
  function calcularQuadrado(numero) {
    return numero * numero;
  }
  
  const calcularProduto = (numero1, numero2) => {
    return numero1 * numero2;
  };
  
  calcularSoma();
  
  let numeroParaQuadrado = 5;
  let resultadoQuadrado = calcularQuadrado(numeroParaQuadrado);
  console.log(`O quadrado de ${numeroParaQuadrado} é: ${resultadoQuadrado}`);
  
  let resultadoProduto = calcularProduto(3, 4);
  console.log("O produto é: " + resultadoProduto);
  