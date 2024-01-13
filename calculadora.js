// Definindo variáveis (parâmetros para a função)
let numeroDeVitorias = 120;
let numeroDeDerrotas = 20;

// Função para calcular o nível com base no saldo de vitórias
function calcularNivel(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    
    // Variável para armazenar o nível
    let nivel;

    // Determinando o nível com base nas condições especificadas
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornando um objeto com as propriedades saldoVitorias e nivel
    return { saldoVitorias, nivel };
}

// Chamando a função e armazenando o resultado em uma variável
let resultado = calcularNivel(numeroDeVitorias, numeroDeDerrotas);

// Exibindo o resultado no terminal
console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

