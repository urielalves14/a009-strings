const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";


//1-Remova o excesso de espaços no final da string
//2-exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços
//3-Substitua os traços `________` por “sticioso”.

console.log(minhaString.length)
console.log(minhaString.trim().length)
const novaquant = minhaString.replace('________', 'mas sou um pouco sticioso')
console.log(novaquant)