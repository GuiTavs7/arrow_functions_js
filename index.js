// 1) Exemplo da aula passada em Arrow Function

let resultadoDaSoma = (numero1, numero2) => {
    return numero1 + numero2;
}

console.log(resultadoDaSoma(12, 5));

// 2) Sintaxe mais simplificada, sem necessidade de usar parênteses! - Funciona para quando tivermos 1 parâmetro 

const incentivarQuester = nomeQuester => {
    console.log ("Parabéns " + nomeQuester + ", você chegou ao módulo de JS intermediário!");
}

incentivarQuester("Roberto");

// 3) Quando a função tem apenas 1 linha dentro de seu bloco de execução, como o exemplo 1, podemos reescrevê-la:

const resultadoDaSomaCleanCode = (num1, num2) => num1 + num2; // Apenas uma linha de código para criar a função!

console.log(resultadoDaSomaCleanCode);

// 4) Versão clean code do exemplo 2

const incentivarQuesterPeloNomeCleanCode = nomeQuester2 => console.log("Parabéns " + nomeQuester2 + ", você chegou ao módulo de JS intermediário!");

console.log(incentivarQuesterPeloNomeCleanCode);