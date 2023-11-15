try {
    let numero1 = prompt("Informe o primeiro número:");
    let numero2 = prompt("Informe o segundo número:");
  
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
  
    if (isNaN(numero1) || isNaN(numero2)) {
      throw new Error("Por favor, insira valores numéricos válidos.");
    }
  
    let resultado = numero1 / numero2;
  
    if (!isFinite(resultado)) {
      throw new Error("Erro: divisão por zero!");
    }
  
    console.log("Resultado da divisão: " + resultado);
  } catch (erro) {
    console.error("Ocorreu um erro: " + erro.message);
  } finally {
    console.log("O bloco 'finally' sempre é executado.");
  }
  