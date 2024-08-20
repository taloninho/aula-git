/*
Elabore um programa que:
1. Solicite o nome de um produto
2. Solicite a quantidade vendida
3. Solicite o valor do produto
4. Apresente o valor total
5. Solicite a % de desconto
6. Apresente o R$ total de desconto
7. Apresente o valor total da venda depois do desconto
*/

var produto = prompt("Digite o nome do produto:");
var quantidadeVendida = prompt("Qual a quantidade vendida?");
var valorProduto = prompt("Qual o valor do produto?");
var valorVenda = quantidadeVendida * valorProduto;
var porcentagem = parseInt(prompt("Digite a porcentagem do desconto:"));
var porcentagemTotal = porcentagem / 100;
var resultado = valorVenda * porcentagemTotal;
var vendaDesconto = valorVenda - resultado;



console.log("O produto é: " + produto);
console.log("O valor total é de: " + valorVenda + " reais");
console.log("O desconto é de: " + resultado + " reais");
console.log("O valor total com desconto é de: " + vendaDesconto + " reais");






