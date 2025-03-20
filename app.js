// 1. Comando de repetição "while"
let numero;
while (numero !== 3) {
    numero = parseInt(prompt("Digite um número (Digite 3 para sair): "));
}

// 2. Loop "do...while" para solicitar senha
const senhaCorreta = "1234";
let tentativa = 0;
let senha;
do {
    senha = prompt("Digite a senha: ");
    tentativa++;
    if (senha === senhaCorreta) {
        alert("Acesso concedido!");
        break;
    }
} while (tentativa < 3);
if (senha !== senhaCorreta) {
    alert("Senha bloqueada!");
}

// 3. Lista com 4 números e exibição
let listaNumeros = [10, 20, 30, 40];
console.log("Lista de números:", listaNumeros);

// 4. Solicitação de 5 números ao usuário
let listaUsuario = [];
for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º número:`));
    listaUsuario.push(num);
}
console.log("Números digitados:", listaUsuario);
alert('Números digitados: ' + listaUsuario.join(', '));

// 5. Função sem parâmetros retornando mensagem personalizada
function mensagemPersonalizada() {
    return "Bem-vindo ao Desafio de Ciência de Dados!";
}
console.log(mensagemPersonalizada());
alert(mensagemPersonalizada());

// 6. Função que recebe um nome e retorna mensagem personalizada
function saudacao(nome) {
    return `Olá, ${nome}, que bom ter você no programa Trilhas.`;
}
console.log(saudacao("Paulo"));
alert(saudacao('Paulo'));

// 7. Função para calcular o quadrado de um número
function calcularQuadrado(numero) {
    return numero * numero;
}
console.log(calcularQuadrado(5));

// 8. Função para subtrair dois números
function subtracao(a, b) {
    return a - b;
}
console.log(subtracao(10, 4));
