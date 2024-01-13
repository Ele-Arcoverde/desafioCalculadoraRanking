https://github.com/Ele-Arcoverde/desafioCalculadoraRanking.git 

Para resolução do Desafio segui os passos abaixo:
## Parâmetros para função:
 Antes e fora do escopo da função, defini duas variáveis representando a quantidade de vitórias e a quantidade de derrotas que o jogador possui.

## Objetivo da função: Obter Saldo de vitórias e determinar Nível.  
No escopo da função, que nomeei como *calcularNivel*, as variáveis (vitorias e derrotas) serviram como parâmetros, utilizei-os para **calcular saldo de vitórias e determinar o nível**, para isto precisei criar outra variável definindo o nível do jogador, e optei por *if, else if, else* para estruturar e organizar a função.

## Resultado:  
Depois da função e Fora do escopo defini nova variável,let resultado, e chamei a função, quando a função foi chamada, ela retornou um **objeto** com **duas propriedades**: saldoVitorias e nivel.

A expressão **resultado.saldoVitorias** representa o acesso as propriedades de um objeto, no caso o objeto retornado pela função calcularNivel (resultado). O ponto é o operador que está acessando a **propriedade saldoVitorias do objeto (resultado)**.

Para exibição no terminal substitui o uso de aspas duplas e o sinal de mais (*" " e +* ), ficando no lugar *crase e ${}* para concatenar o texto as variáves (interpolação de strings).
