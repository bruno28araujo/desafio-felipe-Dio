let nome = "Super Cão"
let xp = 1
let nivel = ""

if (xp < 1000 ){
        nivel = "Ferrou!"
        console.log(nivel + " Se esforce mais " + nome + ".")
        console.log("Você possui: " + xp + " XPs.")
}
else if(xp >= 1001 && xp <= 2000){
    nivel = "Bronze"
    console.log(nome + ", seu nível atual é: " + nivel + ".")
    console.log("Você possui: " + xp + " XPs.")
}
else if(xp >= 2001 && xp <= 5000){
    nivel = "Prata"
    console.log(nome + ", seu nível atual é: " + nivel + ".")
    console.log("Você possui: " + xp + " XPs.")
}
else if(xp >= 5001 && xp <= 7000){
    nivel = "Ouro"
    console.log(nome + ", seu nível atual é: " + nivel + ".")
    console.log("Você possui: " + xp + " XPs.")
}
else if(xp >= 7001 && xp <= 8000){
    nivel = "Platina"
    console.log(nome + ", seu nível atual é: " + nivel + ".")
    console.log("Você possui: " + xp + " XPs.")
}
else if(xp >= 8001 && xp <= 9000){
    nivel = "Ascendente"
    console.log(nome + ", seu nível atual é: " + nivel + ".")
    console.log("Você possui: " + xp + " XPs.")
}
else if(xp >= 9001 && xp <= 10000){
    nivel = "imortal"
    console.log(nome + ", seu nível atual é: " + nivel + ".")
    console.log("Você possui: " + xp + " XPs.")
}
else if(xp >= 10001){
    nivel = "Radiante"
    console.log(nome + ", seu nível atual é: " + nivel + ".")
    console.log("Você possui: " + xp + " XPs.")
}
else{
    console.log("Erro de entradas! Tente novamente.")
}