//1-Crie a const para a frase aqui, com aspas e tudo para guardar a frase

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

//2-Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**

const novaFrase = frase.replace("verde","rosa").replace("azul","laranja")
console.log(novaFrase)
console.log(novaFrase.includes("verde"))
console.log(novaFrase.includes("laranja"))

//Extra: Faça mas não deixe o gato sair ficar maiusculo.
const fraseup = "mas não deixe o gato sair.".toUpperCase()
console.log(`${novaFrase.replace(`mas não deixe o gato sair`), fraseup}`)