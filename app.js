


let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

function botaoConsole() {
    console.log("O botão foi clicado");
}

function botaoAlerta() {
    alert("Eu amo JS.");
}

function botaoPrompt() {
    let cidade = prompt('De que cidade do Brasil você é?');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSoma() {
    let numero1 = prompt('Digite o primeiro valor');
    let numero2 = prompt('Digite o segundo valor');
    let resultado = Number(numero1) + Number(numero2);
    alert(`O resultado da soma é ${resultado}`);
}

