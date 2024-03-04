let nome = "Bruno"
let XP = 1

switch(XP){
    case XP > 0 || XP <= 1000:
        console.log("Ferro!")
        break

    case XP > 1001 || XP <= 2000:
        console.log("Bronze")
        break

    case XP > 2001 || XP <= 5000:
        console.log("Prata ouro")
        break
    
    case XP > 5001 || XP <= 8000:
        console.log("Platina diamente")
        break

    case XP > 8001 || XP <= 9000:
        console.log("Ascendente")
        break

    case XP > 9001 || XP <= 10000:
        console.log("Imortal")
        break

    case XP > 10001:
        console.log("Radiante")
        break

    default:
        console.log("Erro")
        break

}