let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    console.log("Por favor, insira valores numéricos válidos.");
} else {
    const media = (nota1 + nota2 + nota3) / 3;

    console.log("Notas digitadas: " + nota1 + ", " + nota2 + ", " + nota3);
    console.log("Média: " + media.toFixed(2)); 
}
